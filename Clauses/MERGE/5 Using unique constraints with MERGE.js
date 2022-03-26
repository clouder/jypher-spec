/**
 * 5.1. Merge using unique constraints creates a new node if no node is found
 *
 * MERGE (laurence:Person {name: 'Laurence Fishburne'})
 * RETURN laurence.name
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "laurence"
                ,label: "Person"
                ,properties: { name: { literal: "Laurence Fishburne" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "."
            ,expressions: ["laurence" ,"name"]
        } }
    } }
]

/**
 * 5.2. Merge using unique constraints matches an existing node
 *
 * MERGE (oliver:Person {name: 'Oliver Stone'})
 * RETURN oliver.name, oliver.bornIn
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "oliver"
                ,label: "Person"
                ,properties: { name: { literal: "Oliver Stone" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["oliver" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["oliver" ,"bornIn"]
            } }
        ]
    } }
]

/**
 * 5.3. Merge with unique constraints and partial matches
 *
 * MERGE (michael:Person {name: 'Michael Douglas', role: 'Gordon Gekko'})
 * RETURN michael
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
                    ,role: { literal: "Gordon Geko" }
                }
            } }
        ] }
    } }
    ,{ clause: { name: "RETURN" ,expression: "michael" } }
]

/**
 * 5.4. Merge with unique constraints and conflicting matches
 *
 * MERGE (oliver:Person {name: 'Oliver Stone', role: 'Gordon Gekko'})
 * RETURN oliver
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "oliver"
                ,label: "Person"
                ,properties: {
                    name: { literal: "Oliver Stone" }
                    ,role: { literal: "Gordon Gekko" }
                }
            } }
        ] }
    } }
    ,{ clause: { name: "RETURN" ,expression: "oliver" } }
]

/**
 * 5.5. Using map parameters with MERGE
 *
 * MERGE (person:Person {name: $param.name, role: $param.role})
 * RETURN person.name, person.role
 */