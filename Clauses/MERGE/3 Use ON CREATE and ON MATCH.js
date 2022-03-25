/**
 * 3.1. Merge with ON CREATE
 *
 * MERGE (keanu:Person {name: 'Keanu Reeves'})
 * ON CREATE
 *   SET keanu.created = timestamp()
 * RETURN keanu.name, keanu.created
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "keanu"
                ,label: "person"
                ,properties: {
                    name: { literal: "Keanu Reeves" }
                }
            } }
        ] }
        ,modifier: {
            name: "ON CREATE"
            ,clause: {
                name: "SET"
                ,expression: { operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["keanu" ,"created"]
                        } }
                        ,{ function: {
                            name: "timestamp"
                        } }
                    ]
                }}
            }
        }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["keanu" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["keanu" ,"created"]
            } }
        ]
    } }
]

/**
 * 3.2. Merge with ON MATCH
 *
 * MERGE (person:Person)
 * ON MATCH
 *   SET person.found = true
 * RETURN person.name, person.found
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern}
        ,modifier: {
            name: "ON MATCH"
            ,clause: {
                name: "SET"
                ,expression: { operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["person" ,"found"]
                        } }
                        ,{ literal: true }
                    ]
                } }
            }
        }
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
                ,expressions: ["person" ,"found"]
            } }
        ]
    } }
]

/**
 * 3.3. Merge with ON CREATE and ON MATCH
 *
 * MERGE (keanu:Person {name: 'Keanu Reeves'})
 * ON CREATE
 *   SET keanu.created = timestamp()
 * ON MATCH
 *   SET keanu.lastSeen = timestamp()
 * RETURN keanu.name, keanu.created, keanu.lastSeen
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: {
                name: "keanu"
                ,label: "Person"
                ,properties: { name: { literal: "Keanu Reeves" } }
            } }
        ] }
        ,modifiers: [
            { name: "ON CREATE" ,clause: {
                name: "SET"
                ,expression: { operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["keanu" ,"created"]
                        } }
                        ,{ function: { name: "timestamp" } }
                    ]
                } }
            } }
            ,{ name: "ON MATCH" ,clause: {
                name: "SET"
                ,expression: { operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["keanu" ,"lastSeen"]
                        } }
                        ,{ function: { name: "timestamp" } }
                    ]
                } }
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["keanu" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["keanu" ,"created"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["keanu" ,"lastSean"]
            } }
        ]
    } }
]

/**
 * 3.4. Merge with ON MATCH setting multiple properties
 *
 * MERGE (person:Person)
 * ON MATCH
 *   SET
 *     person.found = true,
 *     person.lastAccessed = timestamp()
 * RETURN person.name, person.found, person.lastAccessed
 */
[
    { clause: {
        name: "MERGE"
        ,expression: { pattern: [
            { node: { name: "person" ,label: "Person" } }
        ] }
        ,modifier: {
            name: "ON MATCH"
            ,clause: {
                name: "SET"
                ,expressions: [
                    { operator: {
                        name: "="
                        ,expressions: [
                            { operator: {
                                name: "."
                                ,expressions: ["person" ,"found"]
                            } }
                            ,{ literal: true }
                        ]
                    } }
                    ,{ operator: {
                        name: "="
                        ,expressions: [
                            { operator: {
                                name: "."
                                ,expressions: ["person" ,"lastAccessed"]
                            } }
                            ,{ function: { name: "timestamp" } }
                        ]
                    } }
                ]
            }
        }
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
                ,expressions: ["person" ,"found"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["person" ,"lastAccessed"]
            } }
        ]
    } }
]