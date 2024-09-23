#!/usr/bin/env wolframscript
SetDirectory[ DirectoryName[$InputFileName] ];

<<"bin/EchoTemporaryCLI.wxf";
<<"bin/CommandLineParse.wxf";

EchoTemporaryCLI[
	Quiet[
		If[FailureQ@PacletObject["TonyAristeidou/LocalDeploy"],
			PacletInstall[CloudObject["user:tonya/PacletSites/Wolfram/LocalDeploy"]]
		],
		PacletInstall::samevers
	];
	<<TonyAristeidou`LocalDeploy`;
	,
	"\033[2mInitialising LocalDeploy`...\033[22m"
];

EchoTemporaryCLI[
	expressions = Import[ "expressions.wl" ];
	If[!MatchQ[expressions, {{_Integer, _}...}]
		,
		Print["\033[0;31mWL error\033[0m 'expressions.wl' must of the form {{port_Integer, expression_}...}"];
		Exit[1]
	]
	,
	"\033[2mImporting expressions.wl...\033[22m"
];

EchoTemporaryCLI[
	LaunchKernels[ Min[{ Length[expressions], $ProcessorCount * 2 }] ];
	,
	"\033[2mLaunching parallel kernels...\033[22m"
];

EchoTemporaryCLI[
	base = CommandLineParse[{"--base", "-b"}] /. {
		{Repeated[_?FailureQ, {2}]} :> "localhost",
		{OrderlessPatternSequence[_?FailureQ, {r_}]} :> ToString[r]
	}
	,
	"\033[2mParsing command line arguments...\033[22m"
];

messages = {"\n\n\033[1;31m  ➜  LocalDeploy: \033[0;31mv"<>ToString[PacletObject["TonyAristeidou/LocalDeploy"]["Version"]]<>"\033[0m", "\n\n"};
{isFailure, failures} = {False, {}};

EchoTemporaryCLI[
	DistributeDefinitions["TonyAristeidou`LocalDeploy`"];
	DistributeDefinitions[base];
	SetSharedVariable[messages, isFailure, failures];
	,
	"\033[2mDistributing definitions...\033[22m"
];

enc = WaitAll[
	Function[{
			port,
			expr
		},
		ParallelSubmit[
			Quiet[
				(*
					The KeyValueMap section generates the messages for each
					LocalDeploymentObject which is deployed using the initial MapApply
				*)
				AppendTo[messages,
					StringJoin @
					Append["\n"]@KeyValueMap[{propName, prop}|->
						{Which[
							propName=="Endpoints",
								{
									"  ",
									"\033[1m",
									"Endpoints:",
									"\033[0m"
									,
									"\n",
									Sequence @@ KeyValueMap[{endpoint, iconizedExpr}|->
										{
											"    ",
											"\033[0;36m",
											ToString[endpoint],": ",
											"\033[0m"
											,
											"\033[0;32m",
											ToString[ Head@*First@iconizedExpr ],
											"\033[0m",
											"\n"
										},
										prop
									]
								}
							,
							MatchQ[propName, "Port"|"LocalIPAddress"],
								{
									"  ",
									"\033[1m",
									propName,": ",
									"\033[0m"
									,
									"\033[0;36m",
									ToString[prop],
									"\033[0m",
									"\n"
								},
							MatchQ[propName, "BaseURL"],
								{
									"  ",
									"\033[1m",
									propName,": ",
									"\033[0m"
									,
									"\033[1;36m",
									ToString[prop],
									"\033[0m",
									"\n"
								},
							True,
								{
								}
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
		]
	] @@@ expressions
];

If[isFailure,
	Export[
		log = "./logs/failure-"<>DateString["ISODateTime"]<>".m",
		failures,
		"WL"
	];
	Print["\033[0;31mWL error\033[0m Error encontered during LocalDeploy process. See log for details."];
	Print["\033[0;34mWL info\033[0m Log generated at: ", "@wrb/wl/"<>StringPart[log, 3;;] ];
	Exit[]
];
Print @@ messages;

Pause[0.1];

Print["Type 'exit' to end process:" ];
While[
	!MatchQ[ToString[Input[]], "exit"],
	Null
];
