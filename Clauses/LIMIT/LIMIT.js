/**
 * 2. Return a limited subset of the rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * LIMIT 3
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: { name: "LIMIT" ,expression: { literal: 1 } } }
]

/**
 * 3. Using an expression with LIMIT to return a subset of the rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * LIMIT 1 + toInteger(3 * rand())
 */
[
    { clause: {
        name: "MATCH"
    } }
    ,{ clause: {
        name: "RETURN"
    } }
    ,{ clause: {
        name: "ORDER BY"
    } }
    ,{ clause: {
        name: "LIMIT"
        ,expression: { operator: {
            name: "+"
            ,expressions: [
                { literal: 1 }
                ,{ function: {
                    name: "toInteger"
                    ,argument: { operator: {
                        name: "*"
                        ,expressions: [
                            { literal: 3 }
                            ,{ function: { name: "rand" } }
                        ]
                    } }
                } }
            ]
        } }
    } }
]

/**
 * 4. LIMIT will not stop side effects
 *
 * CREATE (n)
 * RETURN n
 * LIMIT 0
 */
[
    { clause: {
        name: "CREATE"
        ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: { name: "RETURN" ,expression: "n" } }
    ,{ clause: { name: "LIMIT" ,expression: { literal: 0 } } }
]

/**
 * MATCH (n {name: 'A'})
 * SET n.age = 60
 * RETURN n
 * LIMIT 0
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "A" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"age"]
                } }
                ,{ literal: 60 }
            ]
        } }
    } }
    ,{ clause: { name: "RETURN" ,expression: "n" } }
    ,{ clause: { name: "LIMIT" ,expression: { literal: 0 } } }
]

/**
 * MATCH (n)
 * WITH n LIMIT 1
 * SET n.locked = true
 * RETURN n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "WITH"
        ,expression: "n"
    } }
    ,{ clause: { name: "LIMIT" ,expression: { literal: 1 } } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"locked"]
                } }
                ,{ literal: true }
            ]
        } }
    } }
    ,{ clause: { name: "RETURN" ,expression: "n" } }
]