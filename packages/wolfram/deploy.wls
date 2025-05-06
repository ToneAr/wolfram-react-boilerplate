#!/usr/bin/env wolframscript

(* :!CodeAnalysis::BeginBlock:: *)
(* :!CodeAnalysis::Disable::SuspiciousSessionSymbol:: *)

SetDirectory[
	If[$OperatingSystem === "MacOSX",
		ParentDirectory[
			DirectoryName[$InputFileName],
			2
		]
		,
		ParentDirectory @
			DirectoryName[$InputFileName]
	]
];

<<"bin/EchoTemporaryCLI.wxf";
<<"bin/CommandLineParse.wxf";
<<"bin/ANSITools.wxf";

tempStyle = ANSITools["Style", Gray, FontWeight -> "Dim"];
errorStyle = ANSITools["Style", Red];
successStyle = ANSITools["Style", Green];
infoStyle = ANSITools["Style", Blue];

EchoTemporaryCLI[
	If[FailureQ@PacletObject["TonyAristeidou/LocalDeploy"],
		PacletInstall[CloudObject["user:tonya/PacletSites/Wolfram/LocalDeploy"]]
	];
	<<TonyAristeidou`LocalDeploy`;
	,
	"Initialising LocalDeploy`..." // tempStyle
];

EchoTemporaryCLI[
	If[FailureQ@PacletObject["TonyAristeidou/WebSocketLink"],
		PacletInstall[CloudObject["user:tonya/PacletSites/Wolfram/WebSocketLink"]]
	];
	<<TonyAristeidou`WebSocketLink`;
	,
	"Initialising WebSocketLink` paclet..." // tempStyle
];

EchoTemporaryCLI[
	expressions = Import[ "expressions.wl" ];
	If[!MatchQ[expressions, {{_Integer, _}...}],
		Print[
			errorStyle["WL error: "]<>"
				'expressions.wl' must of the form {{port_Integer, expression_}...}"
		];
		Exit[1]
	]
	,
	"Importing expressions.wl..." // tempStyle
];

EchoTemporaryCLI[
	LaunchKernels[ Min[{ Length[expressions], $ProcessorCount * 2 }] ];
	,
	"Launching parallel kernels..." // tempStyle
];

EchoTemporaryCLI[
	base = CommandLineParse[{"--base", "-b"}] /. {
		{Repeated[_?FailureQ, {2}]} :> "localhost",
		{OrderlessPatternSequence[_?FailureQ, {r_}]} :> ToString[r]
	}
	,
	"Parsing command line arguments..." // tempStyle
];

messages = {
	"\n\n",
	ANSITools["Style", Red]["➜ LocalDeploy: "] <>
	ANSITools["Style", FontWeight -> "Dim"][
		"v" <> ToString[PacletObject["TonyAristeidou/LocalDeploy"]["Version"]]
	],
	"\n\n"
};
{isFailure, failures} = {False, {}};

EchoTemporaryCLI[
	DistributeDefinitions["TonyAristeidou`LocalDeploy`"];
	DistributeDefinitions[base];
	SetSharedVariable[messages, isFailure, failures];
	,
	"Distributing definitions..." // tempStyle
];

Quiet @
WaitAll[
	Function[{
			port,
			expr
		},
		ParallelSubmit @
		Quiet[
			(*
				The KeyValueMap section generates the messages for each
				LocalDeploymentObject which is deployed using the initial MapApply
			*)
			AppendTo[messages,
				StringJoin @
				Append["\n"] @
				KeyValueMap[{propName, prop}|->
					{Which[
						propName=="Endpoints",
							{
								"  ",
								ANSITools["Style", FontWeight -> Bold][
									"Endpoints:"
								]
								,
								"\n",
								Sequence @@ KeyValueMap[{endpoint, iconizedExpr} |->
									{
										"    ",
										ANSITools["Style", Cyan][
											ToString[endpoint]<>": "
										]
										,
										ANSITools["Style", Green][
											ToString[ Head@*First@iconizedExpr ]
										],
										"\n"
									},
									prop
								]
							}
						,
						MatchQ[propName, "Port" | "LocalIPAddress"],
							{},
						MatchQ[propName, "BaseURL"],
							{
								"  ",
								ANSITools["Style", FontWeight -> Bold][
									propName<>": "
								]
								,
								ANSITools["Style", Cyan, FontWeight -> Bold][
									ToString[prop]
								],
								"\n"
							},
						True,
							{}
					]}
					,
					With[{
							(*
								Deploy the expressions
							*)
							dep = LocalDeploy[
								expr,
								port,
								"BaseURL"-> base
							]
						},
						If[!MatchQ[dep, _LocalDeploymentObject],
							isFailure = True;
							AppendTo[failures, dep]
							,
							First @ dep
						]
					]
				]
			]
		]
	] @@@ expressions
];


wsPort = 38080;
EchoTemporaryCLI[
	server = WebSocketServerStart[wsPort,
		"Debug" -> True,
		"HandlerFunctions" -> <|
			"DataReceived" -> Function[assoc,
				Print @ ExportString[<|
						"message" -> "Received message",
						"uuid" -> assoc["UUID"],
						"tag" -> "received",
						"success" -> True
					|>,
					"RawJSON"
				]
			],
			"ClientConnected" -> Function[assoc,
				With[{
						msg = <|
							"message" -> "Successfully connected",
							"uuid" -> assoc["UUID"],
							"tag" -> "connected",
							"success" -> True
						|>
					},
					assoc["SendMessage"] @ msg;
					Print @ ExportString[msg, "RawJSON"];
				]
			],
			"ClientDisconnected" -> Function[assoc,
				Print @ ExportString[
					<|
						"message" -> "Client disconnected",
						"uuid" -> assoc["UUID"],
						"tag" -> "disconnected",
						"success" -> True
					|>,
					"RawJSON"
				];
				shouldExit = True;
			]
		|>
	];
	AppendTo[messages,
		Splice @ {
			ANSITools["Style", Blue]["➜ WebSocketLink: "] <>
			ANSITools["Style", FontWeight -> "Dim"][
				"v" <> ToString[PacletObject["TonyAristeidou/WebSocketLink"]["Version"]]
			],
			"\n\n",
			"  ",
			ANSITools["Style", FontWeight -> Bold][
				"BaseURL: "
			],
			ANSITools["Style", Cyan, FontWeight -> Bold][
				URLBuild[<|
					"Scheme" -> "ws",
					"Domain" -> "127.0.0.1",
					"Port" -> wsPort
				|>]
			],
			"\n\n"
		}
	]
	,
	"Deploying WebSocket server..." // tempStyle
];

If[isFailure,
	Export[
		log = "./logs/failure-"<>DateString["ISODateTime"]<>".m",
		failures,
		"WL"
	];
	Print[
		errorStyle["WL error: "]<>
			"Error encountered during LocalDeploy process."<>
			"See log for details."
		];
	Print[
		infoStyle["WL info: "]<>
			"Log generated at: ",
			"@wrb/wolfram/"<>StringPart[log, 3;;]
	];
	Exit[]
];
Print @@ messages;

Pause[0.1];

Print["Type 'exit' to end process:" ];
While[
	!MatchQ[ToString[Input[]], "exit"]
];

(* :!CodeAnalysis::EndBlock:: *)
