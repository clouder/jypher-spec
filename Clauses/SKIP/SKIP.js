/**
 * 2. Skip first three rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * SKIP 3
 */
[
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: { name: "SKIP", expression: { literal: 3 } } }
]

/**
 * 3. Return middle two rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * SKIP 1
 * LIMIT 2
 */
[
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: { name: "SKIP", expression: { literal: 1 } } }
    ,{ clause: { name: "LIMIT", expression: { literal: 2 } } }
]

/**
 * 4. Using an expression with SKIP to return a subset of the rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * SKIP 1 + toInteger(3*rand())
 */
[
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
    } }
    ,{ clause: {
        name: "SKIP"
        , expression: { operator: {
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