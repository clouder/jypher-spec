/**
 * 5.1 Single shortest path
 *
 * MATCH
 * (martin:Person {name: 'Martin Sheen'}),
 * (oliver:Person {name: 'Oliver Stone'}),
 * p = shortestPath((martin)-[*..15]-(oliver))
 * RETURN p
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "martin"
                    ,label: "Person"
                    ,properties: { name: { literal: "Martin Sheen" } }
                } }
            ] }
            ,{ pattern: [
                { node: {
                    name: "oliver"
                    ,label: "Person"
                    ,properties: { name: { literal: "Oliver Stone" } }
                } }
            ] }
            ,{ operator: "=", expressions: [
                "p",
                { function: "shortestPath", argument: { pattern: [
                    { node: { name: "martin" } }
                    ,{ edge: { length: ["-inf", 15] } }
                    ,{ node: { name: "oliver" } }
                ] } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expression: "p"
    }
]

/**
 * 5.2 Single shortest path with predicates
 *
 * MATCH
 * (charlie:Person {name: 'Charlie Sheen'}),
 * (martin:Person {name: 'Martin Sheen'}),
 * p = shortestPath((charlie)-[*]-(martin))
 * WHERE none(r IN relationships(p) WHERE type(r) = 'FATHER')
 * RETURN p
 */
[
    {
        clause: {
            name: "MATCH"
            ,expressions: [
                { pattern: [
                    { node: {
                        name: "charlie"
                        ,label: "Person"
                        ,properties: { name: { literal: "Charlie Sheen" } }
                    } }
                ] }
                ,{ pattern: [
                    { node: {
                        name: "martin"
                        ,label: "Person"
                        ,properties: { name: { literal: "Martin Sheen" } }
                    } }
                ] }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        "p"
                        ,{ function: {
                            name: "shortestPath"
                            ,argument: { pattern: [
                                { node: { name: "charlie" } }
                                ,{ edge: { length: [1, "inf"] } }
                                ,{ node: { name: "martin" } }
                            ] }
                        } }
                    ]
                } }
            ]
        }
    }
    ,{ clause: {
        name: "WHERE"
        ,expression: { function: {
            name: "none"
            ,argument: { operator: {
                name: "IN"
                ,expressions: [
                    "r"
                    ,{ function: {
                        name: "relationships"
                        ,argument: { expression: "p" }
                    } }
                ]
                ,clause: {
                    name: "WHERE"
                    ,expression: { operator: {
                        name: "="
                        ,expressions: [
                            { function: {
                                name: "type",
                                argument: { expression: "r" }
                            } }
                            ,{ literal: "FATHER" }
                        ]
                    } }
                }
            } }
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "p"
    } }
]

[
    {}
    ,{
        clause: "WHERE"
        ,expression: { function: "none", argument: {
            operator: "IN"
            ,expressions: [
                "r"
                ,{ function: "relationships", argument: { expression: "p" } }
            ]
            ,clause: {
                name: "WHERE"
                ,expression: { operator: "=", expressions: [{ function: "type"}]}
            }
        } }
    }
    ,{
        clause: "RETURN"
        ,expression: "p"
    }
]

/**
 * 5.3 All shortest paths
 *
 * MATCH
 * (martin:Person {name: 'Martin Sheen'} ),
 * (michael:Person {name: 'Michael Douglas'}),
 * p = allShortestPaths((martin)-[*]-(michael))
 * RETURN p
 */
[
    {},
    {}
]