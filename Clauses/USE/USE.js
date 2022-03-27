/**
 * 3.1. Query a graph by name
 *
 * USE myDatabase
 * MATCH (n) RETURN n
 */
[
    { clause: { name: "USE" ,expression: "myDatabase" } }
    ,{ clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: { name: "RETURN" ,expression: "n" } }
]