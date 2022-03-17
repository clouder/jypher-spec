/**
 * 6.1 Node by id
 *
 * MATCH (n)
 * WHERE id(n) = 0
 * RETURN n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { function: { name: "id", argument: { expression: "n"} } }
                ,{ literal: 0 }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "n"
    } }
]

/**
 * 6.2 Relationship id
 *
 * MATCH ()-[r]->()
 * WHERE id(r) = 0
 * RETURN r
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {} }
            ,{ edge: { name: "r" } }
            ,{ node: {} }
        ] }
    }}
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { function: { name: "id", argument: { expression: "r" } } }
                ,{ literal: 0 }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "r"
    } }
]

/**
 * 6.3
 *
 * MATCH (n)
 * WHERE id(n) IN [0, 3, 5]
 * RETURN n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" } }
        ] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "IN"
            ,expressions: [
                { function: { name: "id", argument: { expression: "n" } } }
                ,{ list: [{ literal: 0 }, { literal: 3 }, { literal: 5 }] }
            ]
        }}
    }}
    ,{ clause: {
        name: "RETURN"
        ,expression: "n"
    } }
]