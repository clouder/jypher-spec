/**
 * 2. Remove a property
 *
 * MATCH (a {name: 'Andy'})
 * REMOVE a.age
 * RETURN a.name, a.age
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "a"
                ,properties: [{ name: {literal: "Andy" } }]
            } }
        ] }
    } }
    ,{ clause: {
        name: "REMOVE"
        ,expression: { operator: { name: "." ,expressions: ["a" ,"age"] } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["a" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["a" ,"age"] } }
        ]
    } }
]

/**
 * 4. Remove a label from a node
 *
 * MATCH (n {name: 'Peter'})
 * REMOVE n:German
 * RETURN n.name, labels(n)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,properties: [{ name: {literal: "Peter" } }]
            } }
        ] }
    } }
    ,{ clause: {
        name: "REMOVE"
        ,expression: { operator: { name: ":" ,expressions: ["n" ,"German"] } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ function: { name: "labels" ,argument: { expression: "n" } } }
        ]
    } }
]

/**
 * 5. Remove multiple labels from a node
 *
 * MATCH (n {name: 'Peter'})
 * REMOVE n:German:Swedish
 * RETURN n.name, labels(n)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,properties: [{ name: {literal: "Peter" } }]
            } }
        ] }
    } }
    ,{ clause: {
        name: "REMOVE"
        ,expression: { operator: {
            name: ":"
            ,expressions: ["n" ,"German", "Swedish"]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ function: { name: "labels" ,argument: { expression: "n" } } }
        ]
    } }
]