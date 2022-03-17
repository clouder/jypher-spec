/**
 * 2.1 Get all nodes
 *
 * MATCH (n) RETURN n
 */
 [
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: { name: "RETURN", expression: "n" } }
]

/**
 * 2.2 Get all nodes with a label
 *
 * MATCH (movie:Movie) RETURN movie.title
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [{ node: { name: "movie", labels: ["Movie"] } }] }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: '.', expressions: ["movie", "title"] } }
        ]
    } }
]

/**
 * 2.3 Related nodes
 *
 * MATCH (director {name: "Oliver Stoner"})-[]-(movie)
 * RETURN movie.title
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "director"
                ,properties: { name: { literal: "Oliver Stoner"} }
            } }
            ,{ edge: {} }
            ,{ node: { name: "movie" } }
        ] }
    } }
    ,{ clause:  {
        name: "RETURN"
        ,expression: { operator: {
            name: '.' ,expressions: ["movie", "title"]
        } }
    } }
]

/**
 * 2.4 Match with labels
 *
 * MATCH (:Person {name: 'Oliver Stone'})-[]-(movie:Movie)
 * RETURN movie.title
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: { pattern: [
            { node: {
                labels: ["Person"]
                ,properties: { name: { literal: "Oliver Stone"} }
            } }
            ,{ edge: {} }
            ,{ node: { name: "movie", labels: ["Movie"] } }
        ] }
    } }
    ,{ clause:  {
        name: "RETURN"
        ,expression: { operator: {
            name: '.' , expressions: ["movie", "title"]
        } }
    } }
]