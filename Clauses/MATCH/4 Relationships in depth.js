/**
 * 4.1 Relationship types with uncommon characters
 *
 * MATCH
 *   (charlie:Person {name: 'Charlie Sheen'}),
 *   (rob:Person {name: 'Rob Reiner'})
 * CREATE (rob)-[:`TYPE INCLUDING A SPACE`]->(charlie)
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "charlie"
                    ,labels: ["Person"]
                    ,properties: { name: { literal: "Charlie Sheen" } }
                } }
            ] }
            ,{ pattern: [
                { node: {
                    name: "rob"
                    ,labels: ["Person"]
                    ,properties: { name: { literal: "Rob Reiner" } }
                } }
            ] }
        ]
    } }
    ,{ clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "rob" } }
            ,{ edge: { type: "TYPE INCLUDING A SPACE"}, direction: ">" }
            ,{ node: {name: "charlie" } }
        ] }
    } }
]

/**
 * 4.2 Multiple relationships
 *
 * MATCH (charlie {name: 'Charlie Sheen'})-[:ACTED_IN]->(movie)<-[:DIRECTED]-(director)
 * RETURN movie.title, director.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "charlie"
                ,properties: { name: { literal: "Charlie Sheen" } }
            } }
            ,{ edge: { type: "ACTED_IN" }, direction: ">" }
            ,{ node: { name: "movie" } }
            ,{ edge: { type: "DIRECTED "}, direction: "<" }
            ,{ node: { name: "director" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: ".", expressions: ["movie", "title"] } }
            ,{ operator: { name:  ".", expressions: ["director", "name"] } }
        ]
    } }
]

/**
 * 4.3 Variable length relationships
 *
 * MATCH (charlie {name: 'Charlie Sheen'})-[:ACTED_IN*1..3]-(movie:Movie)
 * RETURN movie.title
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "charlie"
                ,properties: { name: { literal: "Charlie Sheen" } }
            } }
            ,{ edge: { type: "ACTED_IN", length: [1, 3] } }
            ,{ node: { name: "movie", labels: ["Movie"] } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "."
            ,expressions: ["movie", "title"]
        } }
    } }
]

/**
 * 4.4 Variable length relationships with multiple relationship types
 *
 * MATCH (charlie {name: 'Charlie Sheen'})-[:ACTED_IN|DIRECTED*2]-(person:Person)
 * RETURN person.name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "charlie"
                ,properties: { name: { literal: "Charlie Sheen" } }
            } }
            ,{edge: { types: ["ACTED_IN", "DIRECTED"], length: [2] } }
            ,{ node: { name: "person", labels: ["Person"] } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "."
            ,expressions: ["person", "name"]
        } }
    } }
]

/**
 * 4.5 Relationship variable in variable length relationships
 *
 * MATCH p = (actor {name: 'Charlie Sheen'})-[:ACTED_IN*2]-(co_actor)
 * RETURN relationships(p)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: {
                        name: actor
                        ,properties: { name: { literal: "Charlie Sheen" } }
                    } }
                    ,{ edge: { type: "ACTED_IN", length: [2] } }
                    ,{ node: { name: "co_actor" } }
                ] }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "relationships"
            ,argument: { expression: "p" }
        } }
    } }
]

/**
 * 4.6 Match with properties on a variable length path
 *
 * MATCH p = (charlie:Person)-[*1.. {blocked:false}]-(martin:Person)
 * WHERE charlie.name = 'Charlie Sheen' AND martin.name = 'Martin Sheen'
 * RETURN p
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: { name: "charlie", labels: ["Person"] } }
                    ,{ edge: { length: [1, "inf"] } }
                    ,{ node: { name: "martin", labels: "Person" } }
                ] }
            ]
        } }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "AND"
            ,expressions: [
                { operator: {
                    name: "="
                    ,expressions: [
                        { operator: ".", expressions: ["charlie", "name"] }
                        ,{ literal: "Charlie Sheen" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressoins: ["martine", "name"]
                        } }
                        ,{ literal: "Martin Sheen"}
                    ]
                } }
            ]
        } }
    } }
    ,{ clause: { name: "RETURN", expression: "p" } }
]

/**
 * 4.7 Zero length paths
 *
 * MATCH (wallstreet:Movie {title: 'Wall Street'})-[*0..1]-(x)
 * RETURN x
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "wallstreet"
                ,label: "Movie"
                ,properties: { title: { literal: "Wall Street" } }
            } }
            ,{ edge: { length: [0, 1] } }
            ,{ node: { name: "x" } }
        ] }
    } }
    ,{ clause: { name: "RETURN", expression: "x" } }
]

/**
 * 4.8 Named paths
 *
 * MATCH p = (michael {name: 'Michael Douglas'})-[]->()
 * RETURN p
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: {
                        name: "michael"
                        ,properties: { name: { literal: "Michael Douglas"} }
                    } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: {} }
                ] }
            ]
        } }
    } }
    ,{ clause: { name: "RETURN" ,expression: "p" } }
]

/**
 * 4.9 Matching on a bound relationship
 *
 * MATCH (a)-[r]-(b)
 * WHERE id(r) = 0
 * RETURN a, b
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "a" } }
            ,{ edge: { name: "r" } }
            ,{ node: { name: "b" } }
        ] }
    } }
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
        ,expressions: ["a", "b"]
    } }
]