/**
 * 2. Introducing variables for expressions
 *
 * MATCH (george {name: 'George'})<--(otherPerson)
 * WITH otherPerson, toUpper(otherPerson.name) AS upperCaseName
 * WHERE upperCaseName STARTS WITH 'C'
 * RETURN otherPerson.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "george"
                ,properties: { name: { literal: "Geroge" } }
            } }
            ,{ edge: { direction: "<" } }
            ,{ node: { name: "otherPerson" } }
        ] }
    } }
    ,{ clause: {
        name: "WITH"
        ,expressions: [
            "otherPerson"
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toUpper"
                        ,argument: { operator: {
                            name: "."
                            ,expressions: ["otherPerson", "name"]
                        } }
                    } }
                    ,"upperCaseName"
                ]
            } }
        ]
    } }
    ,{ clause: {
        name: "WITH"
        ,expression: { operator: {
            name: "STARTS WITH"
            ,expressions: ["upperCaseName", { literal: "C" }]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: ".", expressions: ["otherPerson", "name"]
        } }
    } }
]

/**
 * 3. Using the wildcard to carry over variables
 *
 * MATCH (person)-[r]->(otherPerson)
 * WITH *, type(r) AS connectionType
 * RETURN person.name, otherPerson.name, connectionType
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "person" } }
            ,{ edge: { name: "r", direction: ">" } }
            ,{ node: { name: "otherPerson" } }
        ] }
    } }
    ,{ clause: {
        name: "WITH"
        ,expressions: [
            "*"
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "type", argument: { expression: "r" }
                    } }
                    ,"connectionType"
                ]
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            ,{ operator: { name: ".", expressions: ["person", "name"] } }
            ,{ operator: { name: ".", expressions: ["otherPerson", "name"] } }
            ,"connectionType"
        ]
    } }
]

/**
 * 4. Filter on aggregate function results
 *
 * MATCH (david {name: 'David'})--(otherPerson)-->()
 * WITH otherPerson, count(*) AS foaf
 * WHERE foaf > 1
 * RETURN otherPerson.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "david"
                ,properties: { name: { literal: "David" } }
            } }
            ,{ edge: {} }
            ,{ node: { name: "otherPerson" } }
            ,{ edge: { direction: ">" } }
            ,{ node: {} }
        ] }
    } }
    ,{ clause: {
        name: "WITH"
        ,expressions: [
            "otherPerson"
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: { name: "count", expression: "*" } }
                    ,"foaf"
                ]
            } }
        ]
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: ">"
            ,expressions: ["foaf", { literal: 1 }]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "."
            ,expressions: ["otherPerson", "name"]
        } }
    } }
]

/**
 * 5. Sort results before using collect on them
 *
 * MATCH (n)
 * WITH n
 * ORDER BY n.name DESC
 * LIMIT 3
 * RETURN collect(n.name)
 */
[
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: {name: "n" } }] }
    } }
    ,{ clause: { name: "WITH", expression: "n" } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: ".", expressions: ["n", "name"] } }
        ,direction: "DESC"
    } }
    ,{ clause: { name: "LIMIT", expression: { literal: 3 } } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "collect"
            ,argument: { operator: { name: ".", expressions: ["n", "name"] } }
        } }
    } }
]

/**
 * 6. Limit branching of a path search
 *
 * MATCH (n {name: 'Anders'})--(m)
 * WITH m
 * ORDER BY m.name DESC
 * LIMIT 1
 * MATCH (m)--(o)
 * RETURN o.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n", properties: { name: { literal: "Anders" } } } }
            ,{ edge: {} }
            ,{ node: { name: "m" } }
        ] }
    } }
    ,{ clause: { name: "WITH", expression: "m" } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: ".", expressions: ["m", "name"] } }
    } }
    ,{ clause: { name: "LIMIT", expression: { literal: 1 } } }
    ,{ clause: {
        name: "MATCH"
        , expression: { pattern: [
            { node: { name: "m" } }
            ,{ edge: {} }
            ,{ node: { name: "o" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: ".", expressions: ["o", "name"] } }
    } }
]