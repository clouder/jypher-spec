/**
 * 2.1. Merge single node with a label
 *
 * MERGE (robert:Critic)
 * RETURN robert, labels(robert)
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "robert" ,label: "Critic" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            "robert"
            ,{ function: {
                name: "labels"
                ,argument: { expression: "robert" }
            } }
        ]
    } }
]

/**
 * 2.2. Merge single node with properties
 *
 * MERGE (charlie {name: 'Charlie Sheen', age: 10})
 * RETURN charlie
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "charlie"
                ,properties: {
                    name: { literal: "Charlie Sheen" }
                    ,age: { literal: 10 }
                }
            } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: "charlie"
    } }
]

/**
 * 2.3. Merge single node specifying both label and property
 *
 * MERGE (michael:Person {name: 'Michael Douglas'})
 * RETURN michael.name, michael.bornIn
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "michael"
                ,label: "Person"
                ,properties: {
                    name: { literal: "Michael Douglas" }
                }
            } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["michael" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["michael" ,"bornIn"]
            } }
        ]
    } }
]

/**
 * 2.4. Merge single node derived from an existing node property
 *
 * MATCH (person:Person)
 * MERGE (city:City {name: person.bornIn})
 * RETURN person.name, person.bornIn, city
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "person" ,label: "Person"} }
        ] }
    } }
    ,{ clause: {
        name: "MERGE"
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: "." ,expressions: ["person" ,"name"] }
            ,{ operator: "." ,expression: ["person" ,"bornIn"] }
            ,"city"
        ]
    } }
]