(*
	Outline all wolfram language expressions
	you want to deploy in the following form:

		{
			{ port, expr, name },
			...
		}

	expr: can be anything supported by GenerateHTTPResponse.
	port: is given as an integer
*)

{
	{
		(*
			Demo URLDispatcher
		*)
		4848,
		URLDispatcher[{
			"/evaluate"~~EndOfString ->
			APIFunction[{"in"->"String"},
				ToExpression[#in]&
			]
			,
			("/evaluate-"~~evaluator:("Python"|"NodeJS"|"Shell")) :>
			APIFunction[{"in"->"String"},
				ExternalEvaluate[evaluator,
					#in
				]&
			]
		}],
		"Demo"
	}
	,
	{
		(*
			Hertbeat Endpoint
			Use this for diagnostics
		*)
		8888,
		URLDispatcher[{
			"/aliveQ" -> APIFunction[{}, True &]
		}],
		""
	}
}
