/**
 * 2. Unwinding a list
 *
 * UNWIND [1, 2, 3, null] AS x
 * RETURN x, 'val' AS y
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: 1 }
                    ,{ literal: 2 }
                    ,{ literal: 3 }
                    ,{ literal: null }
                ] }
                ,"x"
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            "x"
            ,{ operator: {
                name: "AS"
                ,expression: [{ literal: "val" } ,"y"]
            } }
        ]
    } }
]

/**
 * 3. Creating a distinct list
 *
 * WITH [1, 1, 2, 2] AS coll
 * UNWIND coll AS x
 * WITH DISTINCT x
 * RETURN collect(x) AS setOfVals
 */
[
    { clause: {
        name: "WITH"
    } }
    ,{ clause: {
        name: "UNWIND"
    } }
    ,{ clause: {
        name: "WITH"
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { function: { name: "collect" ,argument: { expression: "x" } } }
                ,"setOfVals"
            ]
        } }
    } }
]

/**
 * 4. Using UNWIND with any expression returning a list
 *
 * WITH
 * [1, 2] AS a,
 * [3, 4] AS b
 * UNWIND (a + b) AS x
 * RETURN x
 */
[
    { clause: {
        name: "WITH"
        ,expressions: [
            { operator: {
                name: "AS"
                ,expressions: [
                    { literal: [{ literal: 1 }, { literal: 2 }]}
                    ,"a"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { literal: [{ literal: 3 }, { literal: 4 }]}
                    ,"b"
                ]
            } }
        ]
    } }
    ,{ clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: {
                    name: "()"
                    ,expression: { operator: {
                        name: "+"
                        ,expressions: ["a" ,"b"]
                    } }
                } }
                ,"x"
            ]
        }}
    } }
    ,{ clause: { name: "RETURN" ,expression: "x" } }
]

/**
 * 5. Using UNWIND with a list of lists
 *
 * WITH [[1, 2], [3, 4], 5] AS nested
 * UNWIND nested AS x
 * UNWIND x AS y
 * RETURN y
 */
[
    { clause: {
        name: "WITH"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: [{ literal: 1 }, { literal: 2 }] }
                    ,{ literal: [{ litera: 3 }, { literal: 4 }] }
                    ,{ literal: 5 }
                ] }
                ,"nested"
            ]
        } }
    } }
    ,{ clause: {
        name: "UNWIND"
        ,expression: { operator: { name: "AS" ,expressions: ["nested", "x"] } }
    } }
    ,{ clause: {
        name: "UNWIND"
        ,expression: { operator: { name: "AS" ,expressions: ["x" ,"y"] } }
    } }
    ,{ clause: { name: "RETURN" ,expression: "y" } }
]

/**
 * 6. Using UNWIND with an empty list
 *
 * UNWIND [] AS empty
 * RETURN empty, 'literal_that_is_not_returned'
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [ { literal: [] } ,"empty"]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            "empty"
            ,{ literal: "literal_that_is_not_returned" }
        ]
    } }
]

/**
 * 7. Using UNWIND with an expression that is not a list
 *
 * UNWIND null AS x
 * RETURN x, 'some_literal'
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: ["x" ,{ literal: "some_literal" }]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            "x"
            ,{ literal: "some_literal" }
        ]
    } }
]

/**
 * [NOTICE]
 * UNSURE IF THIS IS APPLICABLE TO Jypher
 *
 * 8. Creating nodes from a list parameter
 *
 * UNWIND $events AS event
 * MERGE (y:Year {year: event.year})
 * MERGE (y)<-[:IN]-(e:Event {id: event.id})
 * RETURN e.id AS x ORDER BY x
 */