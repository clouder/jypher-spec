/**
 * 2. Return nodes
 *
 * MATCH (n {name: 'B'})
 * RETURN n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n", properties: { name: { literal: "B" } } } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "n"
    } }
]

/**
 * 3. Return relationships
 *
 * MATCH (n {name: 'A'})-[r:KNOWS]->(c)
 * RETURN r
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n", properties: { name: { literal: "A" } } } }
            ,{ edge: { name: "r", type: "KNOWS" } }
            ,{ node: { name: "c" } }
        ] }
    } }
    ,{ clause: { name: "RETURN", expression: "r" } }
]

/**
 * 4. Return property
 *
 * MATCH (n {name: 'A'})
 * RETURN n.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n", properties: { name: { literal: "A" } } } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: ".", expressions: ["n", "name"] } }
    } }
]

/**
 * 5. Return all elements
 *
 * MATCH p = (a {name: 'A'})-[r]->(b)
 * RETURN *
 */

[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: ["p", { pattern: [
                { node: { name: "a", properties: { name: { literal: "A" } } } }
                ,{ edge: { name: "r"} }
                ,{ node: { name: "b" } }
            ] }]
        } }
    } }
    ,{ clause: { name: "RETURN", expression: "*" } }
]

/**
 * 6. Variable with uncommon characters
 *
 * MATCH (`This isn\'t a common variable`)
 * WHERE `This isn\'t a common variable`.name = 'A'
 * RETURN `This isn\'t a common variable`.happy
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "This isn't a common variable" } }
        ] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "This isn't a common variable"
                ,"A"
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "This isn't a common variable"
    }}
]

/**
 * 7. Column alias
 *
 * MATCH (a {name: 'A'})
 * RETURN a.age AS SomethingTotallyDifferent
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "a", properties: { name: { literal: "A" } } } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: { name: ".", expressions: ["a", "age"] } }
                ,"SomethingTotallyDifferent"
            ]
        } }
    } }
]

/**
 * 8. Optional properties
 *
 * MATCH (n)
 * RETURN n.age
 */
[
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: ".", expressions: ["n", "age"] } }
    } }
]

/**
 * 9. Other expressions
 *
 * MATCH (a {name: 'A'})
 * RETURN a.age > 30, "I'm a literal", (a)-->()
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "a", properties: { name: { literal: "A" } } } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: ">"
                ,expressions: [
                    { operator: { name: ".", expressions: ["a", "age"] } }
                    ,{ literal: 30}
                ]
            } }
            ,{ literal: "I'm a literal" }
            ,{ pattern: [
                { node: { name: "a" } }
                ,{ edge: { direction: ">" } }
                ,{ node: {} }
            ] }
        ]
    } }
]

/**
 * 10. Unique results
 *
 * MATCH (a {name: 'A'})-->(b)
 * RETURN DISTINCT b
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "a", properties: { name: { literal: "A" } } } }
            ,{ edge: { direction: ">" } }
            ,{ node: { name: "b" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: { name: "DISTINCT", expression: "b" } }
    } }
]