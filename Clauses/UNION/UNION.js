/**
 * 2. Combine two queries and retain duplicates
 *
 * MATCH (n:Actor)
 * RETURN n.name AS name
 * UNION ALL
 * MATCH (n:Movie)
 * RETURN n.title AS name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" ,label: "Actor" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: { name: "." ,expressions: ["n" ,"name"] } }
                ,"name"
            ]
        } }
    } }
    ,{ clause: { name: "UNION" ,modifier: { name: "ALL" } } }
    ,{ clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" ,label: "Movie" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: { name: "." ,expressions: ["n" ,"title"] } }
                ,"name"
            ]
        } }
    } }
]

/**
 * 3. Combine two queries and remove duplicates
 *
 * MATCH (n:Actor)
 * RETURN n.name AS name
 * UNION
 * MATCH (n:Movie)
 * RETURN n.title AS name
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" ,label: "Actor" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: { name: "." ,expressions: ["n" ,"name"] } }
                ,"name"
            ]
        } }
    } }
    ,{ clause: { name: "UNION" } }
    ,{ clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" ,label: "Movie" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: { name: "." ,expressions: ["n" ,"title"] } }
                ,"name"
            ]
        } }
    } }
]