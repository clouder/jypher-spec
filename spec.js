empty_node = { node: {} } //=> ()

full_node = {
    node: {
        name: "node"
        ,labels: ["Label"]
        ,properties:  {
            prop: {
                literal: "value"
            }
        }
    }
} //=> (node:Label {prop: 'value'})

empty_edge = { edge: {} } //=> []

full_edge = {
    edge: {
        name: "edge"
        ,type: "TYPE"
        ,properties: {
            prop: {
                literal: "value"
            }
        }
        ,direction: ">"
        ,length: [2]
    }
} //=> -[edge:TYPE*2 {prop: 'value'}]-

edge_left = { edge: { direction: "<" } } //=> <-[]-
edge_length_range = { edge: { length: [3,5] } } //=> -[*3..5]-
edge_length_lower_bound = { edge: { length: [3, "inf"] } } //=> -[*3..]-
edge_length_upper_bound = { edge: { length: ["-inf", 5] } } //=> -[*..5]-

// Only used when MATCHing or WHEREing,
// never in CREATE as edges can only be of one type
edge_matching_different_types = {
    edge: {
        types: ["TYPE1", "TYPE2"]
    }
} //=> -[:TYPE1|TYPE2]-

pattern = {
    pattern: [
        {
            node: {
                name: "a"
                ,labels: ["Node"]
                ,properties: {
                    prop: { literal: "value" }
                }
            }
        }
        ,{
            edge: {
                name: "b"
                ,type: "EDGE"
                ,direction: ">"
                ,properties: {
                    prop: { literal: "value" }
                }
            }
        }
        ,{
            node: {
                name: "c"
                ,labels: ["Node"]
                ,properties: {
                    prop: { literal: "value" }
                }
            }
        }
        ,{
            edge: {
                name: "d"
                ,type: "EDGE"
                ,direction: "<"
                ,properties: {
                    prop: { literal: "value" }
                }
            }
        }
        ,{
            node: {
                name: "e"
                ,labels: ["Node"]
                ,properties: {
                    prop: { literal: "value" }
                }
            }
        }
    ]
} //=> (a:Node {prop: 'value'})-[b:EDGE {prop: 'value'}]->(c:Node {prop: 'value'})<-[d:EDGE {prop: 'value'}]-(e:Node {prop: 'value'})

path_variable = {
    operator: "="
    ,expressions: [
        "variable"
        ,{
            pattern: [
                { node: {} }
                ,{ edge: {} }
                ,{ node: {} }
            ]
        }
    ]
} //=> variable = ()-[]-()

match_clause = {
    clause: "MATCH"
    ,expressions: [
        { pattern: [
                { node: {} }
                ,{ edge: {} }
                ,{ node: {} }
        ] }
    ]
} //=> MATCH ()-[]-()

clauses_match_2_1_get_all_nodes = [
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: { name: "n" } }
            ] }
        ]
    }
    ,{ clause: "RETURN", expressions: ["n"] }
] //=> MATCH (n) RETURN n

clauses_match_2_2_get_all_nodes_with_a_label = [
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: { name: "movie", labels: ["Movie"] } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["movie", "title"] }]
    }
] //=> MATCH (movie:Movie) RETURN movie.title

/**
 * Clauses/MATCH/2. Basic Node Finding/2.3 Related nodes
 * 
 * MATCH (director {name: "Oliver Stoner"})-[]-(movie)
 * RETURN movie.title
 */
clauses_match_2_3_related_nodes = [
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "director"
                    ,properties: { name: { literal: "Oliver Stoner"} }
                } }
                ,{ edge: {} }
                ,{ node: { name: "movie" } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["movie", "title"] }]
    }
]

/**
 * Clauses/MATCH/2. Basic Node Finding/2.4 Match with labels
 * 
 * MATCH (:Person {name: 'Oliver Stone'})-[]-(movie:Movie)
 * RETURN movie.title
 */
[
    {
        clause: "MATCH"
        ,expressions: [
            { pattern: [
                { node: { 
                    labels: ["Person"]
                    ,properties: { name: { literal: "Oliver Stone"} }
                } }
                ,{ edge: {} }
                ,{ node: { name: "movie", labels: ["Movie"] } }
            ] }
        ]
    }
    ,{
        clause: "RETURN"
        ,expressions: [{ operator: '.', expressions: ["movie", "title"] }]
    }
]

