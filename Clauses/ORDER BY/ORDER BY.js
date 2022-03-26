/**
 * 2. Order nodes by property
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY n.name
 */[
     { clause: {
         name: "MATCH"
         ,expression: { pattern: [{ node: { name: "n" } }] }
     } }
     ,{ clause: {
         name: "RETURN"
         ,expressions: [
             { operator: { name: "." ,expressions: ["n" ,"name"] } }
             ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
         ]
     } }
     ,{ clause: {
         name: "ORDER BY"
         ,expression: { operator: { name: "." ,expressions: ["n" ,"name"] } }
     } }
 ]

/**
 * 3. Order nodes by multiple properties
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY n.age, n.name
 */
[
    { clause: {
        name: "MATCH" ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
        ]
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"age"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"name"] } }
        ]
    } }
]

/**
 * 4. Order nodes by id
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY id(n)
 */
[
    { clause: {
        name: "MATCH" ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
        ]
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expressions: [
            { function: { name: "id" ,argument: { expression: "n" } } }
        ]
    } }
]

/**
 * 5. Order nodes by expression
 *
 * MATCH (n)
 * RETURN n.name, n.age, n.length
 * ORDER BY keys(n)
 */
[
    { clause: {
        name: "MATCH" ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"length"] } }
        ]
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expressions: [
            { function: { name: "keys" ,argument: { expression: "n" } } }
        ]
    } }
]

/**
 * 6. Order nodes in descending order
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY n.name DESC
 */
[
    { clause: {
        name: "MATCH" ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
        ]
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
        ]
        ,direction: "DESC"
    } }
]

/**
 * 7. Ordering null
 *
 * MATCH (n)
 * RETURN n.length, n.name, n.age
 * ORDER BY n.length
 */
[
    { clause: {
        name: "MATCH" ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"length"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
        ]
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"length"] } }
        ]
    } }
]

/**
 * 8. Ordering in a WITH clause
 *
 * MATCH (n)
 * WITH n ORDER BY n.age
 * RETURN collect(n.name) AS names
 */
[
    { clause: {
        name: "MATCH" ,expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: { name: "WITH" ,expression: "n" } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: { name: "." ,expressions: ["n" ,"age"]} }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { function: {
                    name: "collect"
                    ,argument: { operator: {
                        name: "."
                        ,expressions: ["n" ,"name"]
                    } }
                } }
                ,{ expression: "names" }
            ]
        } }
    } }
]