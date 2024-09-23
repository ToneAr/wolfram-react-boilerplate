(*
	Outline all wolfram language expressions
	you want to deploy in the following form:

		{
			{ port, expr },
			...
		}

	expr: Can be anything supported by GenerateHTTPResponse.
	port: Given as an integer.

	Each port is using a separate Kernel worker.
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
		}]
	}
	,
	{
		(*
			Heartbeat Endpoint
			Use this for diagnostics
		*)
		8888,
		URLDispatcher[{
			"/aliveQ" -> APIFunction[{}, True &, "RawJSON"]
		}]
	}
}
