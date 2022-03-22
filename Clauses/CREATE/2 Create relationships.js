/**
 * 2.1. Create a relationship between two nodes
 *
 * MATCH (a:Person), (b:Person)
 * WHERE a.name = 'A' AND b.name = 'B'
 * CREATE (a)-[r:RELTYPE]->(b)
 * RETURN type(r)
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [{ node: { name: "a" ,label: "Person" } }] }
            ,{ pattern: [{ node: { name: "b" ,label: "Person" } }] }
        ]
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
                            ,expressions: ["a" ,"name"]
                        } }
                        ,{ literal: "A" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["b" ,"name"]
                        } }
                        ,{ literal: "B" }
                    ]
                } }
            ]
        }}
    } }
    ,{ clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "a" } }
            ,{ edge: { name: "r" ,label: "RELTYPE" ,direction: ">" } }
            ,{ node: { name: "b" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "type"
            ,argument: { expression: "r" }
        } }
    } }
]

/**
 * 2.2. Create a relationship and set properties
 *
 * MATCH (a:Person), (b:Person)
 * WHERE a.name = 'A' AND b.name = 'B'
 * CREATE (a)-[r:RELTYPE {name: a.name + '<->' + b.name}]->(b)
 * RETURN type(r), r.name
 */
 [
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [{ node: { name: "a" ,label: "Person" } }] }
            ,{ pattern: [{ node: { name: "b" ,label: "Person" } }] }
        ]
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
                            ,expressions: ["a" ,"name"]
                        } }
                        ,{ literal: "A" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["b" ,"name"]
                        } }
                        ,{ literal: "B" }
                    ]
                } }
            ]
        }}
    } }
    ,{ clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "a" } }
            ,{ edge: {
                name: "r"
                ,label: "RELTYPE"
                ,properties: {
                    name: { operator: {
                        name: "+"
                        ,expressions: [
                            { operator: {
                                name: "."
                                ,expressions: ["a" ,"name"]
                            } }
                            ,{ literal: "<->"}
                            ,{ operator: {
                                name: "."
                                ,expressions: ["b" ,"name"]
                            } }
                        ]
                    } }
                }
                ,direction: ">"
            } }
            ,{ node: { name: "b" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "type"
            ,argument: { expression: "r" }
        } }
    } }
]