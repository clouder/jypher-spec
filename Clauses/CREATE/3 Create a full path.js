/**
 * 3. Create a full path
 *
 * CREATE p = (andy {name:'Andy'})-[:WORKS_AT]->(neo)<-[:WORKS_AT]-(michael {name: 'Michael'})
 * RETURN p
 */
[
    { clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: {
                name: "andy"
                ,properties: { name: { literal: "Andy" } }
            } }
            ,{ edge: { type: "WORKS_AT" ,direction: ">" } }
            ,{ node: { name: "neo" } }
            ,{ edge: { type: "WORKS_AT" ,direction: "<" } }
            ,{ node: {
                name: "michael"
                ,properties: { name: { literal: "Michael" } }
            } }
         ] }
    } }
    ,{ clause: { name: "RETURN" ,expression: "p" } }
]