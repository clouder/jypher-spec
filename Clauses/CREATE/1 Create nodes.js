/**
 * 1.1. Create single node
 *
 * CREATE (n)
 */
[
    { clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "n" } }
        ] }
    } }
]

/**
 * 1.2. Create multiple nodes
 *
 * CREATE (n), (m)
 */
[
    { clause: {
        name: "CREATE"
        ,expressions: [
            { pattern: { node: { name: "n" } } }
            ,{ pattern: { node: { name: "m" } } }
        ]
    } }
]

/**
 * 1.3. Create a node with a label
 *
 * CREATE (n:Person)
 */
[
    { clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "n" ,label: "Person" } }
        ] }
    } }
]

/**
 * 1.4. Create a node with multiple labels
 *
 * CREATE (n:Person:Swedish)
 */
[
    { clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "n" ,labels: ["Person" ,"Swedish"] } }
        ] }
    } }
]

/**
 * 1.5. Create node and add labels and properties
 *
 * CREATE (n:Person {name: 'Andy', title: 'Developer'})
 */

/**
 * 1.6. Return created node
 *
 * CREATE (a {name: 'Andy'})
 * RETURN a.name
 */
[
    { clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: { name: "a" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "."
            ,expressions: ["a" ,"name"]
        } }
    } }
]