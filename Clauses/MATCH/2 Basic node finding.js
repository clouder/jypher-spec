/**
 * 2.1 Get all nodes
 * 
 * MATCH (n) RETURN n
 */
 [
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: { name: "n" } }
            ] }
        ]
    }
    ,{ clause: "RETURN", expressions: ["n"] }
] //=> MATCH (n) RETURN n

/**
 * 2.2 Get all nodes with a label
 * 
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: { name: "movie", labels: ["Movie"] } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["movie", "title"] }]
    }
] //=> MATCH (movie:Movie) RETURN movie.title

/**
 * 2.3 Related nodes
 * 
 * MATCH (director {name: "Oliver Stoner"})-[]-(movie)
 * RETURN movie.title
 */
clauses_match_2_3_related_nodes = [
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "director"
                    ,properties: { name: { literal: "Oliver Stoner"} }
                } }
                ,{ edge: {} }
                ,{ node: { name: "movie" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["movie", "title"] }]
    }
]

/**
 * 2.4 Match with labels
 * 
 * MATCH (:Person {name: 'Oliver Stone'})-[]-(movie:Movie)
 * RETURN movie.title
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: { 
                    labels: ["Person"]
                    ,properties: { name: { literal: "Oliver Stone"} }
                } }
                ,{ edge: {} }
                ,{ node: { name: "movie", labels: ["Movie"] } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["movie", "title"] }]
    }
]