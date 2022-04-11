/**
 * Simple CASE
 * 
 * MATCH (n)
 * RETURN
 * CASE n.eyes
 *   WHEN 'blue'  THEN 1
 *   WHEN 'brown' THEN 2
 *   ELSE 3
 * END AS result
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [ { node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                {
                    name: "CASE"
                    ,expression: { operator: {
                        name: "."
                        ,expressions: ["n" ,"eyes"]
                    } }
                    ,conditions: [
                        { when: { literal: "blue" } ,then: { literal: 1 } }
                        ,{ when: { literal: "brown" } ,then: { literal: 2 } }
                        ,{ else: { literal: 3 } }
                    ]
                }
                ,"result"
            ]
        } }
    } }
]

/**
 * Generic CASE
 * 
 * MATCH (n)
 * RETURN
 * CASE
 *   WHEN n.eyes = 'blue' THEN 1
 *   WHEN n.age < 40      THEN 2
 *   ELSE 3
 * END AS result
 */
 [
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [ { node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                {
                    name: "CASE"
                    ,conditions: [
                        { 
                            when: { operator: {
                                name: "="
                                ,expressions: [
                                    { operator: { name: "."
                                        ,expressions: ["n" ,"eyes"]
                                    } }
                                    ,{ literal: "blue" }
                                ]
                            } } 
                            ,then: { literal: 1 } 
                        }
                        ,{ 
                            when: { operator: {
                                name: "<"
                                ,expressions: [
                                    { operator: { name: "."
                                        ,expressions: ["n" ,"age"]
                                    } }
                                    ,{ literal: 40 }
                                ]
                            } } 
                            ,then: { literal: 2 } 
                        }
                        ,{ else: { literal: 3 } }
                    ]
                }
                ,"result"
            ]
        } }
    } }
]