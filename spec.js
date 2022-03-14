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