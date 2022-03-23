/**
 * 2. Delete single node
 *
 * MATCH (n:Person {name: 'UNKNOWN'})
 * DELETE n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,label: "Person"
                ,properties: { name: { literal: "UNKNOWN"} }
            } }
        ] }
    } }
    ,{ clause: { name: "DELETE" ,expression: "n" } }
]

/**
 * 3. Delete all nodes and relationships
 *
 * MATCH (n)
 * DETACH DELETE n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n"} }] }
    } }
    ,{ clause: {
        name: "DELETE"
        ,modifier: "DETACH"
        ,expression: "n"
    } }
]

/**
 * 4. Delete a node with all its relationships
 *
 * MATCH (n {name: 'Andy'})
 * DETACH DELETE n
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "DELETE"
        ,modifier: "DETACH"
        ,expression: "n"
    } }
]

/**
 * 5. Delete relationships only
 *
 * MATCH (n {name: 'Andy'})-[r:KNOWS]->()
 * DELETE r
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
            ,{ edge: { name: "r" ,type: "KNOWS" ,direction: ">" } }
            ,{ node: {} }
        ] }
    } }
    ,{ clause: {
        name: "DELETE"
        ,expression: "r"
    } }
]