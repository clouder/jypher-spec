/**
 *  2 Optional relationships
 *
 * MATCH (a:Movie {title: 'Wall Street'})
 * OPTIONAL MATCH (a)-->(x)
 * RETURN x
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "a"
                ,label: "Movie"
                ,properties: { title: { literal: "Wall Street" } } } }
        ] }
    } }
    ,{ clause: {
        name: "OPTIONAL MATCH"
        ,expression: { pattern: [
            { node: { name: "a" } }
            ,{ edge: { direction: ">" } }
            ,{ node: { name: "x" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "x"
    } }
]

/**
 * 3 Properties on optional elements
 *
 * MATCH (a:Movie {title: 'Wall Street'})
 * OPTIONAL MATCH (a)-->(x)
 * RETURN x, x.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "a"
                , label: "Movie"
                , properties: { title: { literal: "Wall Street"} }
            } }
        ] }
    } }
    ,{ clause: {
        name: "OPTIONAL MATCH"
        ,expression: { pattern: [
            { node: { name: "a" } }
            ,{ edge: { direction: ">" } }
            ,{ node: { name: "x" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        , expressions: [
            "x"
            , { operator: { name: ".", expressions: ["x", "name"] } }
        ]
    } }
]

/**
 * 4 Optional typed and names relationship
 *
 * MATCH (a:Movie {title: 'Wall Street'})
 * OPTIONAL MATCH (a)-[r:ACTS_IN]->()
 * RETURN a.title, r
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "a"
                ,label: "Movie"
                ,properties: { title: { literal: "Wall Street" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "OPTIONAL MATCH"
        ,expression: { pattern : [
            { node: { name: "a" } }
            ,{ edge: { name: "r", "type": "ACTS_IN", direction: ">" } }
            ,{ node: {} }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: ".", expressions: ["a", "title"] } }
            ,"r"
        ]
    } }
]