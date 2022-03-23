/**
 * 2. Mark all nodes along a path
 *
 * MATCH p=(start)-[*]->(finish)
 * WHERE start.name = 'A' AND finish.name = 'D'
 * FOREACH (n IN nodes(p) | SET n.marked = true)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: { name: "start" } }
                    ,{ edge: { direction: ">", length: [1, "inf"] } }
                    ,{ node: { name: "finish" } }
                ] }
            ]
        } }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "AND"
            ,expressions: [
                { operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["start" ,"name"]
                        } }
                        ,{ literal: "A" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["finish" ,"name"]
                        } }
                        ,{ literal: "D" }
                    ]
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "FOREACH"
        ,list_expression: { operator: {
            name: "IN"
            ,expressions: [
                "n"
                ,{ function: { name: "nodes" ,argument: { expression: "p" } } }
            ]
        }}
        ,clause: {
            name: "SET"
            ,expression: { operator: {
                name: "="
                ,expressions: [
                    { operator: {
                        name: "."
                        ,expressions: ["n" ,"marked"]
                    } }
                    ,{ literal: true }
                ]
            } }
        }
    } }
]