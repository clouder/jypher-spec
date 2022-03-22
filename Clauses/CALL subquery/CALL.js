/**
 * 2. Importing variables into subqueries
 *
 * UNWIND [0, 1, 2] AS x
 * CALL {
 *   WITH x
 *   RETURN x * 10 AS y
 * }
 * RETURN x, y
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { list: [
                    { literal: 0 }
                    ,{ literal: 1 }
                    ,{ literal: 2 }
                ] }
                ,"x"
            ]
        } }
    } }
    ,{ clause: {
        name: "CALL"
        ,clauses: [
            { clause: { name: "WITH" ,expression: "x" }}
            ,{ clause: {
                name: "RETURN"
                ,expression: { operator: {
                    name: "AS"
                    ,expressions: [
                        { operator: {
                            name: "*"
                            ,expressions: ["x" ,{ literal: 10 }]
                        } }
                    ]
                } }
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: ["x", "y"]
    } }
]

/**
 * 3. Post-union processing
 *
 * CALL {
 *   MATCH (p:Person)
 *   RETURN p
 *   ORDER BY p.age ASC
 *   LIMIT 1
 * UNION
 *   MATCH (p:Person)
 *   RETURN p
 *   ORDER BY p.age DESC
 *   LIMIT 1
 * }
 * RETURN p.name, p.age
 * ORDER BY p.name
 */

[
    { clause: {
        name: "CALL"
        ,clauses: [
            { clause: {
                name: "MATCH"
                ,expression: { pattern: [
                    { node: { name: "p" ,label: "Person"}}
                ] }
            } }
            ,{ clause: { name: "RETURN" ,expression: "p" } }
            ,{ clause: {
                name: "ORDER BY"
                ,expression: { operator: "." ,expressions: ["p" ,"age"] }
                ,direction: "ASC"
            } }
            ,{ clause: { name: "LIMIT" ,expression: { literal: 1 } } }
            ,{ clause: {
                name: "UNION"
            } }
            ,{ clause: {
                name: "MATCH"
                ,expression: { pattern: [
                    { node: { name: "p" ,label: "Person"}}
                ] }
            } }
            ,{ clause: { name: "RETURN", expression: "p" } }
            ,{ clause: {
                name: "ORDER BY"
                ,expression: { operator: ".", expressions: ["p" ,"age"] }
                ,direction: "DESC"
            } }
            ,{ clause: { name: "LIMIT" ,expression: { literal: 1 } } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["p", "name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["p", "age"]
            } }
        ]
    } }
    ,{ clause: {
        name: "ORDER BY"
        ,expression: { operator: {
            name: "."
            ,expressions: ["p" ,"name"]
        } }
    } }
]

/**
 * 4. Aggregations
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   MATCH (p)-[:FRIEND_OF]-(c:Person)
 *   RETURN c.name AS friend
 * }
 * RETURN p.name, friend
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "p" ,label: "Person"} }] }
    } }
    ,{ clause: {
        name: "CALL"
        ,clauses: [
            { clause: { name: "WITH", expression: "p" } }
            ,{ clause: {
                name: "MATCH"
                ,expression: { pattern: [
                    { node: { name: "p" } }
                    ,{ edge: { label: "FRIEND_OF" } }
                    ,{ node: { name: "c", label: "Person" } }
                ] }
            } }
            ,{ clause: {
                name: "RETURN"
                ,expression: { operator: {
                    name: "AS"
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["c" ,"name"] } }
                        ,"friend"
                    ]
                } }
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: ".", expressions: ["p" ,"name"] } }
            ,"friend"
        ]
    } }
]

/**
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   MATCH (p)--(c)
 *   RETURN count(c) AS numberOfConnections
 * }
 * RETURN p.name, numberOfConnections
 */
[
    { clause: {
        name: "MATCH"
    } }
    ,{ clause: {
        name: "CALL"
        ,clauses: [
            { clause: { name: "WITH", expression: "p" } }
            ,{ clause: {
                name: "MATCH"
                ,expression: { pattern: [
                    { node: { name: "p" } }
                    ,{ edge: {} }
                    ,{ node: { name: "c"} }
                ] }
            } }
            ,{ clause: {
                name: "RETURN"
                ,expression: { operator: {
                    name: "AS"
                    ,expressions: [
                        { function: {
                            name: "count"
                            ,argument: { expression: "c" }
                        } }
                        ,"numberOfConnections"
                    ]
                } }
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["p" ,"name"] } }
            ,"numberOfConnections"
        ]
    } }
]

/**
 * 5. Unit subqueries and side-effects
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   UNWIND range (1, 5) AS i
 *   CREATE (:Person {name: p.name})
 * }
 * RETURN count(*)
 */
[
    { clause: {
        name: "MATCH"
    } }
    ,{ clause: {
        name: "CALL"
        ,clauses: [
            { clause: { name: "WITH" ,expression: "p" } }
            ,{ clause: {
                name: "UNWIND"
                ,expression: { operator: {
                    name: "AS"
                    ,expressions: [
                        { function: {
                            name: "range"
                            ,arguments: [{ literal: 1 } ,{ literal: 5}]
                        } }
                        ,"i"
                    ]
                } }
            } }
            ,{ clause: {
                name: "CREATE"
                ,expression: { pattern: [
                    { node: {
                        label: "Person"
                        ,properties: { name: { expression: {
                            operator: { name: ".", expressions: ["p" ,"name"] }
                        } } }
                    } }
                ] }
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "count"
            ,argument: { expression: "*"}
        } }
    } }
]

/**
 * 6. Aggregation on imported variables
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   MATCH (other:Person)
 *   WHERE other.age < p.age
 *   RETURN count(other) AS youngerPersonsCount
 * }
 * RETURN p.name, youngerPersonsCount
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "p" ,label: "Person" } }
        ] }
    } }
    ,{ clause: {
        name: "CALL"
        ,clauses: [
            { clause: { name: "WITH" ,expression: "p" } }
            ,{ clause: {
                name: "MATCH"
                ,expression: { pattern: [
                    { node: { name: "other", label: "Person" } }
                ] }
            } }
            ,{ clause: {
                name: "WHERE"
                ,expression: { operator: {
                    name: "<"
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["other" ,"age"]
                        } }
                        ,{ operator: { name: "." ,expressions: ["p" ,"age"] } }
                    ]
                } }
            } }
            ,{ clause: {
                name: "RETURN"
                ,expression: { operator: {
                    name: "AS"
                    ,expression: { operator: {
                        name: "AS"
                        ,expressions: [
                            { function: {
                                name: "count"
                                ,argument: { expression: "other" }
                            } }
                            ,"youngerPersonCount"
                        ]
                    } }
                } }
            } }
        ]
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["p" ,"name"] } }
            ,"youngerPersonsCount"
        ]
    } }
]

/**
 * 7. Subqueries in transactions
 *
 * LOAD CSV FROM 'file:///friends.csv' AS line
 * CALL {
 *   WITH line
 *   CREATE (:PERSON {name: line[1], age: toInteger(line[2])})
 * } IN TRANSACTIONS
 */
[
    { clause: {
        name: "LOAD CSV"
        ,from: { literal: "file:///fiends.csv" }
        ,as: { expression: "line" }
    } }
    ,{ clause: {
        name: "CALL"
        ,clauses: [
            { clause: { name: "WITH", expression: "line" } }
            ,{ clause: {
                name: "CREATE"
                ,expression: { pattern: [
                    { node: {
                        label: "PERSON"
                        ,properties: {
                            name: { expression: { operator: {
                                name: "[]"
                                ,expressions: ["line" ,{ literal: 1 }]
                            } } }
                        }
                    } }
                ] }
            } }
        ]
        ,modifier: { name: "IN TRANSACTIONS" }
    } }
]

/**
 * 7.1. Batching
 *
 * LOAD CSV FROM 'file:///friends.csv' AS line
 * CALL {
 *   WITH line
 *   CREATE (:Person {name: line[1], age: toInteger(line[2])})
 * } IN TRANSACTIONS OF 2 ROWS
 */
[
    {}
]

/**
 *
 * MATCH (n)
 * CALL {
 *   WITH n
 *   DETACH DELETE n
 * } IN TRANSACTIONS OF 2 ROWS
 */
[
    {}
]

/**
 * 7.2. Errors
 *
 * UNWIND [4, 2, 1, 0] AS i
 * CALL {
 *   WITH i
 *   CREATE (:Example {num: 100/i})
 * } IN TRANSACTIONS OF 2 ROWS
 * RETURN i
 */
[
    {}
]