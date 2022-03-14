/**
 * 3.1 Outgoing relationships
 *
 * MATCH (:Person {name: 'Oliver Stone'})-[]->(movie) RETURN movie.title
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    labels: ["Person"]
                    ,properties: {name: { literal: "Oliver Stone"} }
                } }
                ,{ edge: {} }
                ,{ node: { name: "movie" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [ { operator: ".", expressions: ["movie", "title"] } ]
    }
]

/**
 * 3.2 Directed relationships and variable
 *
 * MATCH (:Person {name: 'Oliver Stone'})-[r]->(movie) RETURN type(r)
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    labels: ["Person"]
                    ,properties: { name: { literal: "Oliver Stone" } }
                } }
                ,{ edge: { name: "r" } }
                ,{ node: { name: "movie" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expression: { function: "type", argument: { expression: "r" } }
    }
]

/**
 * 3.3 Match on relationship type
 *
 * MATCH (wallstreet:Movie {title: 'Wall Street'})<-[:ACTED_IN]-(actor)
 * RETURN actor.name
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "wallstreet"
                    ,labels: ["Movie"]
                    ,properties: { title: { literal: "Wall Street" } }
                } }
                ,{ edge: { type: "ACTED_IN" } }
                ,{ node: { name: "actor" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["actor", "name"] }]
    }
]

/**
 * 3.4 Match on multiple relationship types
 *
 * MATCH (wallstreet {title: 'Wall Street'})<-[:ACTED_IN|:DIRECTED]-(person)
 * RETURN person.name
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "wallstreet"
                    ,properties: { title: { literal: "Wall Street" } }
                } }
                ,{ edge: { types: ["ACTED_IN", "DIRECTED"] } }
                ,{ node: { name: "person" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["person", "name"] }]
    }
]

/**
 * 3.5 Match on relationship type and use a variable
 *
 * MATCH (wallstreet {title: 'Wall Street'})<-[r:ACTED_IN]-(actor)
 * RETURN r.role
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "wallstreet"
                    ,properties: { title: { literal: "Wall Street" } }
                } }
                ,{ edge: { name: "r", type: ["ACTED_IN"] } }
                ,{ node: { name: "actor" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["r", "role"] }]
    }
]