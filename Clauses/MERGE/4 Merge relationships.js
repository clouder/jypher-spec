/**
 * 4.1. Merge on a relationship
 *
 * MATCH (charlie:Person {name: 'Charlie Sheen'}), (wallStreet:Movie {title: 'Wall Street'})
 * MERGE (charlie)-[r:ACTED_IN]->(wallStreet)
 * RETURN charlie.name, type(r), wallStreet.title
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "charlie"
                    ,label: "Person"
                    ,properties: { name: { literal: "Charlie Sheen" } }
                } }
            ] }
            ,{ pattern: [
                { node: {
                    name: "wallStreet"
                    ,label: "Movie"
                    ,properties: { title: { literal: "Wall Street" } }
                } }
            ] }
        ]
    } }
    ,{ clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "charlie" } }
            ,{ edge: { name: "r" ,type: "ACTED_IN" ,direction: ">" } }
            ,{ node: { name: "wallStreet" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["charlie" ,"name"]
            } }
            ,{ function: {
                name: "type"
                ,argument: { expression: "r" }
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["wallStreet" ,"title"]
            } }
        ]
    } }
]

/**
 * 4.2. Merge on multiple relationships
 *
 * MATCH
 *   (oliver:Person {name: 'Oliver Stone'}),
 *   (reiner:Person {name: 'Rob Reiner'})
 * MERGE (oliver)-[:DIRECTED]->(movie:Movie)<-[:ACTED_IN]-(reiner)
 * RETURN movie
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "oliver"
                    ,label: "Person"
                    ,properties: { name: { literal: "Oliver Stone" } }
                } }
            ] }
            ,{ pattern: [
                { node: {
                    name: "reiner"
                    ,label: "Person"
                    ,properties: { name: { literal: "Rob Reiner" } }
                } }
            ] }
        ]
    } }
    ,{ clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "oliver" } }
            ,{ edge: { type: "DIRECTED" ,direction: ">" } }
            ,{ node: { name: "movie" ,label: "Movie" } }
            ,{ edge: { direction: "<" ,type: "ACTED IN" } }
            ,{ node: { name: "reiner" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "movie"
    } }
]

/**
 * 4.3. Merge on an undirected relationship
 *
 * MATCH
 *   (charlie:Person {name: 'Charlie Sheen'}),
 *   (oliver:Person {name: 'Oliver Stone'})
 * MERGE (charlie)-[r:KNOWS]-(oliver)
 * RETURN r
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern : [
                { node: {
                    name: "charlie"
                    ,label: "Person"
                    ,properties: { name: { literal: "Charlie Sheen" } }
                } }
            ] }
            ,{ pattern: [
                { node: {
                    name: "oliver"
                    ,label: "Person"
                    ,properties: { name: { literal: "Oliver Stone" } }
                } }
            ] }
        ]
    } }
    ,{ clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "charlie" } }
            ,{ edge: { name: "r", type: "KNOWS" } }
            ,{ node: { name: "oliver" } }
        ] }
    } }
    ,{ clause: { name: "RETURN" ,expression: "r" } }
]

/**
 * 4.4. Merge on a relationship between two existing nodes
 *
 * MATCH (person:Person)
 * MERGE (city:City {name: person.bornIn})
 * MERGE (person)-[r:BORN_IN]->(city)
 * RETURN person.name, person.bornIn, city
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "person" ,label: "Person" } }
        ] }
    } }
    ,{ clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "city"
                ,label: "City"
                ,properties: {
                    name: { operator: {
                        name: "."
                        ,expressions: ["person" ,"bornIn"]
                    } }
                }
            } }
        ] }
    } }
    ,{ clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "person" } }
            ,{ edge: { name: "r" ,type: "BORN_INT" } }
            ,{ node: { name: "city" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["person" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["person" ,"bornIn"]
            } }
            ,"city"
        ]
    } }
]

/**
 * 4.5. Merge on a relationship between an existing node
 * and a merged node derived from a node property
 *
 * MATCH (person:Person)
 * MERGE (person)-[r:HAS_CHAUFFEUR]->(chauffeur:Chauffeur {name: person.chauffeurName})
 * RETURN person.name, person.chauffeurName, chauffeur
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "person" ,label: "Person" } }
        ] }
    } }
    ,{ clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "person" } }
            ,{ edge: {
                name: "r"
                ,label: "HAS_CHAUFFEUR"
                ,direction: ">"
            } }
            ,{ node: {
                name: "chauffeur"
                ,label: "Chauffeur"
                ,properties: {
                    name: { operator: {
                        name: "."
                        ,expressions: ["person" ,"chauffeurName"]
                    } }
                }
            } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["person" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["person" ,"chauffeurName"]
            } }
            ,"chauffeur"
        ]
    } }
]