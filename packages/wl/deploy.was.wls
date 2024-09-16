SetDirectory[ DirectoryName[$InputFileName] ];
<<"bin/EchoTemporaryCLI.wxf";
<<"bin/CommandLineParse.wxf";

EchoTemporaryCLI[
	expressions = Import[ "expressions.wl" ]
	,
	"Importing expressions.wl..."
];

EchoTemporaryCLI[
	Quiet[
		If[FailureQ@PacletObject["WolframApplicationServer"],
			PacletInstall["WolframApplicationServer"]
		],
		PacletInstall::samevers
	];
	<<WolframApplicationServer`
	,
	"Initialising WolframApplicationServer`..."
];

EchoTemporaryCLI[
	was = ServiceConnect["WolframApplicationServer", "nginx"]
	,
	"Connecting to WAS..."
];

EchoTemporaryCLI[
	domain = CommandLineParse[{"--domain", "-d"}] /. {
		{OrderlessPatternSequence[{rest__String}, _?FailureQ]} :> rest,
		{Repeated[ _?FailureQ], {2}} :> $Failed,
		{___} :> $Failed
	}
	,
	"Parsing command line arguments..."
];

EchoTemporaryCLI[
	(
		{port, expression, name} |-> (
			If[MatchQ[expression, _URLDispatcher],
				KeyValueMap[{endpoint, subExpression} |->
					ServiceDeploy[was, <|
							"Contents" -> subExpression,
							"Resource" -> URLBuild[{domain, name, endpoint <> ".wl"}],
							"Endpoint" -> Echo[URLBuild[{domain, name, endpoint}]],
							"ResourceType" -> "ActiveWebElement"
						|>,
						IncludeDefinitions -> True
					],
					<|expression[[1]]|>
				],
				ServiceDeploy[was, <|
						"Contents" -> expression,
						"Resource" -> URLBuild[{domain, name <> ".wl"}],
						"Endpoint" -> Echo[URLBuild[{domain, name}]] ,
						"ResourceType" -> "ActiveWebElement"
					|>,
					IncludeDefinitions -> True
				]
			]
		)
	) @@@ expressions
	,
	"Deploying expressions to WAS..."
];
