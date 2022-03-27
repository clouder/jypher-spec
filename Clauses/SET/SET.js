/**
 * 2. Set a property
 *
 * MATCH (n {name: 'Andy'})
 * SET n.surname = 'Taylor'
 * RETURN n.name, n.surname
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: { name: "." ,expressions: ["n" ,"surname"] } }
                ,{ literal: "Taylor" }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"surname"] } }
        ]
    } }
]

/**
 * MATCH (n {name: 'Andy'})
 * SET (CASE WHEN n.age = 36 THEN n END).worksIn = 'Malmo'
 * RETURN n.name, n.worksIn
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: [
                        { operator: {
                            name: "()"
                            ,expression: {
                                name: "CASE"
                                ,condition: {
                                    when: { operator: {
                                        name: "="
                                        ,expressions: [
                                            { operator: {
                                                name: "."
                                                ,expressions: ["n" ,"age"]
                                            } }
                                        ]
                                    } }
                                    ,then: { expression: "n" }
                                }
                            }
                        } }
                        ,"worksIn"
                    ]
                } }
                ,{ literal: "Malmo" }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"worksIn"] } }
        ]
    } }
]

/**
 * MATCH (n {name: 'Andy'})
 * SET (CASE WHEN n.age = 55 THEN n END).worksIn = 'Malmo'
 * RETURN n.name, n.worksIn
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,properties: { name: { literal: "Andy" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: [
                        { operator: {
                            name: "()"
                            ,expression: {
                                name: "CASE"
                                ,condition: {
                                    when: { operator: {
                                        name: "="
                                        ,expression: [
                                            { operator: {
                                                name: "."
                                                ,expressions: ["n" ,"age"]
                                            } }
                                            ,{ literal: 55 }
                                        ]
                                    } }
                                    ,then: { expression: "n" }
                                }
                            }
                        } }
                        ,"worksIn"
                    ]
                } }
                ,{ literal: "Malmo" }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { oeprator: {
                name: "."
                ,expressions: ["n" ,"name"]
            } }
            ,{ oeprator: {
                name: "."
                ,expressions: ["n" ,"worksIn"]
            } }
        ]
    } }
]

/**
 * 3. Update a property
 *
 * MATCH (n {name: 'Andy'})
 * SET n.age = toString(n.age)
 * RETURN n.name, n.age
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"age"]
                } }
                ,{ function: {
                    name: "toString"
                    ,argument: { operator: {
                        name: "."
                        ,expressions: ["n" ,"age"]
                    } }
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["n" ,"name"]
            } }
            ,{ operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        ]
    } }
]

/**
 * 4. Remove a property
 *
 * MATCH (n {name: 'Andy'})
 * SET n.name = null
 * RETURN n.name, n.age
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "n"
                ,properties: { name: { literal: "Andy" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"name"]
                } }
                ,{ literal: null }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"age"] } }
        ]
    } }
]

/**
 * 5. Copy properties between nodes and relationships
 *
 * MATCH (at {name: 'Andy'}), (pn {name: 'Peter'})
 * SET at = pn
 * RETURN at.name, at.age, at.hungry, pn.name, pn.age
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [
                { node: {
                    name: "at"
                    ,properties: { name: {literal: "Andy" } }
                } }
            ] }
            ,{ pattern: [
                { node: {
                    name: "pt"
                    ,properties: { name: {literal: "Peter" } }
                } }
            ] }
        ]
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: ["at", "pn"]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["at" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["at" ,"age"] } }
            ,{ operator: { name: "." ,expressions: ["at" ,"hungry"] } }
            ,{ operator: { name: "." ,expressions: ["pn" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["pn" ,"age"] } }
        ]
    } }
]

/**
 * 6. Replace all properties using a map and =
 *
 * MATCH (p {name: 'Peter'})
 * SET p = {name: 'Peter Smith', position: 'Entrepreneur'}
 * RETURN p.name, p.age, p.position
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "p" ,properties: { name: { literal: "Peter" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ literal: {
                    name: { literal: "Peter Smith" }
                    ,position: { literal: "Entrepreneur" }
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["p" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"age"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"position"] } }
        ]
    } }
]

/**
 * 7. Remove all properties using an empty map and =
 *
 * MATCH (p {name: 'Peter'})
 * SET p = {}
 * RETURN p.name, p.age
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "p"
                ,properties: { name: { literal: "Peter" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: ["p" ,{ literal: {} }]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["p" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"age"] } }
        ]
    } }
]

/**
 * 8. Mutate specific properties using a map and +=
 *
 * MATCH (p {name: 'Peter'})
 * SET p += {age: 38, hungry: true, position: 'Entrepreneur'}
 * RETURN p.name, p.age, p.hungry, p.position
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: {
                name: "p"
                ,properties: { name: { literal: "Peter" } }
            } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "+="
            ,expressions: [
                "p"
                ,{ literal: {
                    age: { literal: 38 }
                    ,hungry: { literal: true }
                    ,position: { literal: "Entrpreneur" }
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["p" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"age"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"hungry"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"position"] } }
        ]
    }}
]

/**
 * MATCH (p {name: 'Peter'})
 * SET p += {}
 * RETURN p.name, p.age
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "p" ,properties: { name: { literal: "Peter" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "+="
            ,expressions: ["p" ,{ literal: {} } ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["p" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["p" ,"age"] } }
        ]
    } }
]

/**
 * 9. Set multiple properties using one SET clause
 *
 * MATCH (n {name: 'Andy'})
 * SET n.position = 'Developer', n.surname = 'Taylor'
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expressions: [
            { operator: {
                name: "="
                ,expressions: [
                    { operator: { name: "." ,expressions: ["n" ,"position"] } }
                    ,{ literal: "Developer" }
                ]
            } }
            ,{ operator: {
                name: "="
                ,expressions: [
                    { operator: { name: "." ,expressions: ["n" ,"surname"] } }
                    ,{ literal: "Taylor" }
                ]
            } }
        ]
    } }
]

/**
 * 10. Set a property using a parameter
 *
 * MATCH (n {name: 'Andy'})
 * SET n.surname = $surname
 * RETURN n.name, n.surname
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Andy" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: { name: "." ,expressions: ["n" ,"surname"] } }
                ,"$surname"
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: { name: "." ,expressions: ["n" ,"surname"] } }
        ]
    } }
]

/**
 * 11. Set all properties using a parameter
 *
 * MATCH (n {name: 'Andy'})
 * SET n = $props
 * RETURN n.name, n.position, n.age, n.hungry
 */

/**
 * 12. Set a label on a node
 *
 * MATCH (n {name: 'Stefan'})
 * SET n:German
 * RETURN n.name, labels(n) AS labels
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "Stefan" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: ":"
            ,expressions: ["n" ,"German"]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "labels"
                        ,argument: { expression: "n" }
                    } }
                    ,"labels"
                ]
            } }
        ]
    } }
]

/**
 * 13. Set multiple labels on a node
 *
 * MATCH (n {name: 'George'})
 * SET n:Swedish:Bossman
 * RETURN n.name, labels(n) AS labels
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [
            { node: { name: "n" ,properties: { name: { literal: "George" } } } }
        ] }
    } }
    ,{ clause: {
        name: "SET"
        ,expression: { operator: {
            name: ":"
            ,expressions: ["n" ,"Swedish" ,"Bossman"]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["n" ,"name"] } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "labels"
                        ,argument: { expression: "n" }
                    } }
                    ,"labels"
                ]
            } }
        ]
    }}
]