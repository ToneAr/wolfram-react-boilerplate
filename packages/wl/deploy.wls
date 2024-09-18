#!/usr/bin/env wolframscript
SetDirectory[ DirectoryName[$InputFileName] ];
<<"bin/EchoTemporaryCLI.wxf";
<<"bin/CommandLineParse.wxf";
(* <<"bin/LocalDeploy.wxf"; *)

	EchoTemporaryCLI[
		Quiet[
			If[FailureQ@PacletObject["TonyAristeidou/LocalDeploy"],
				PacletInstall[CloudObject["user:tonya/PacletSites/Wolfram/LocalDeploy"]]
			],
			PacletInstall::samevers
		];
		<<TonyAristeidou`LocalDeploy`;
		,
		"Initialising LocalDeploy`..."
	];

	EchoTemporaryCLI[
		expressions = Import[ "expressions.wl" ];
		,
		"Importing expressions.wl..."
	];

	EchoTemporaryCLI[
		LaunchKernels[ Min[{ Length[expressions], $ProcessorCount * 2 }] ];
		,
		"Launching parallel kernels..."
	];

	EchoTemporaryCLI[
		base = CommandLineParse[{"--base", "-b"}] /. {
			{Repeated[{_?FailureQ}, {2}], _} :> "localhost",
			{OrderlessPatternSequence[_?FailureQ, {r_}]} :> ToString[r]
		}
		,
		"Parsing command line arguments..."
	];

	EchoTemporaryCLI[
		DistributeDefinitions["TonyAristeidou`LocalDeploy`"];
		DistributeDefinitions[base];
		,
		"Distributing definitions..."
	];

	Print[ "\n","---------------- LocalDeploy: "<>ToString[PacletObject["TonyAristeidou/LocalDeploy"]["Version"]]<>" ---------------", "\n"];

	WaitAll[
		Function[{
				port,
				expr
			},
			ParallelSubmit[
				Print[
					StringJoin @
					KeyValueMap[{propName, prop}|->
						If[propName=="Endpoints",
							{
								"Endpoints:","\n",
								Sequence @@ KeyValueMap[{endpoint, iconizedExpr}|->
									{
										"\t",ToString[endpoint],": ",
										ToString[ Head@*First@iconizedExpr ],
										"\n"
									},
									prop
								]
							}
							,
							{
								propName,": ",ToString[prop],"\n"
							}
						]
						,
						Echo[LocalDeploy[
							expr,
							port,
							"BaseURL"-> base
						]]//First
					]
				]
			]
		] @@@ expressions
	];

Pause[0.1];

Print[ "Type 'exit' to end process:" ];
While[
	!MatchQ[ToString[Input[]], "exit"],
	Null
];
