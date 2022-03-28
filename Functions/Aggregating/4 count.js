/**
 * 4.1. Using count(*) to return the number of nodes
 *
 * MATCH (n {name: 'A'})-->(x)
 * RETURN labels(n), n.age, count(*)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,properties: { name: { literal: "A" } }
            } }
            ,{ edge: { direction: ">" } }
            ,{ node: { name: "x" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { function: { name: "labels" ,argument: { expression: "n" } } }
            ,{ operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
            ,{ function: {
                name: "count"
                ,argument: { expression: "*" }
            } }
        ]
    } }
]

/**
 * 4.2. Using count(*) to group and count relationship types
 *
 * MATCH (n {name: 'A'})-[r]->()
 * RETURN type(r), count(*)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "A" } } } }
            ,{ edge: { name: "r" ,direction: ">" } }
            ,{ node: {} }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { function: {
                name: "type"
                ,argument: { expression: "r" }
            } }
            ,{ function: {
                name: "count"
                ,argument: { expression: "*" }
            } }
        ]
    } }
]

/**
 * 4.3. Using count(expression) to return the number of values
 *
 * MATCH (n {name: 'A'})-->(x)
 * RETURN count(x)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,properties: {
                    name: { literal: "A" }
                }
            } }
            ,{ edge: { direction: ">" } }
            ,{ node: { name: "x" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "count"
            ,argument: { expression: "x" }
        } }
    } }
]

/**
 * 4.4. Counting non-null values
 *
 * MATCH (n:Person)
 * RETURN count(n.age)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,label: "Person" } }
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "count"
            ,argument: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]

/**
 * 4.5. Counting with and without duplicates
 *
 * MATCH (me:Person)-->(friend:Person)-->(friend_of_friend:Person)
 * WHERE me.name = 'A'
 * RETURN count(DISTINCT friend_of_friend), count(friend_of_friend)
 */
[
    { clause: {
        name: "MATCH"
    } }
    ,{ clause: {
        name: "WHERE"
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { function: {
                name: "count"
                ,expression: { operator: {
                    name: "DISTINCT"
                    ,expression: "friend_of_friend"
                } }
            } }
            ,{ function: {
                name: "count"
                ,argument: { expression: "friend_of_friend" }
            } }
        ]
    } }
]