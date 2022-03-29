/**
 * 1. keys()
 *
 * MATCH (a) WHERE a.name = 'Alice'
 * RETURN keys(a)
 */
[
    { clause : {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "a" } }] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["a" ,"name"]
                } }
                ,{ literal: "Alice" }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "keys"
            ,argument: { expression: "a" }
        } }
    } }
]

/**
 * 2. labels()
 *
 * MATCH (a) WHERE a.name = 'Alice'
 * RETURN labels(a)
 */
[
    { clause : {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "a" } }] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["a" ,"name"]
                } }
                ,{ literal: "Alice" }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "labels"
            ,argument: { expression: "a" }
        } }
    } }
]

/**
 * 3. nodes()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice' AND c.name = 'Eskil'
 * RETURN nodes(p)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: { name: "a" } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: { name: "b" } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: { name: "c" } }
                ] }
            ]
        } }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "AND"
            ,expressions: [
                { operator: {
                    name: "="
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["a" ,"name"] } }
                        ,{ literal: "Alice" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["c" ,"name"] } }
                        ,{ literal: "Eskil" }
                    ]
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "nodes"
            ,argument: { expression: "p" }
        } }
    } }
]
/**
 * 4. range()
 *
 * RETURN range(0, 10), range(2, 18, 3), range(0, 5, -1)
 */
[
    { clause: {
        name: "RETURN"
        ,expressions: [
            { function: {
                name: "range"
                ,expressions: [{ literal: 0} ,{ literal: 10 }]
            } }
            ,{ function: {
                name: "range"
                ,expressions: [{ literal: 2} ,{ literal: 18 } ,{literal: 3 }]
            } }
            ,{ function: {
                name: "range"
                ,expressions: [{ literal: 0} ,{ literal: 5 } ,{ literal: -1 }]
            } }
        ]
    } }
]

/**
 * 5. reduce()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice' AND b.name = 'Bob' AND c.name = 'Daniel'
 * RETURN reduce(totalAge = 0, n IN nodes(p) | totalAge + n.age) AS reduction
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: { name: "a" } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: { name: "b" } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: { name: "c" } }
                ] }
            ]
        } }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "AND"
            ,expressions: [
                { operator: {
                    name: "="
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["a" ,"name"] } }
                        ,{ literal: "Alice" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["b" ,"name"] } }
                        ,{ literal: "Bob" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["c" ,"name"] } }
                        ,{ literal: "Daniel" }
                    ]
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { function: {
                    name: "reduce"
                    ,arguments: [
                        { operator: {
                            name: "="
                            ,expressions: ["totalAge" ,{ literal: 0 }]
                        } }
                        ,{ operator: {
                            name: "|"
                            ,expressions: [
                                { operator: {
                                    name: "IN"
                                    ,expression: [
                                        "n"
                                        ,{ function: {
                                            name: "nodes"
                                            ,argument: { expression: "p" }
                                        } }
                                    ]
                                } }
                                ,{ operator: {
                                    name: "+"
                                    ,expressions: [
                                        "totalAge"
                                        ,{ operator: {
                                            name: "."
                                            ,expressions: ["n" ,"age"]
                                        } }
                                    ]
                                } }
                            ]
                        } }
                    ]
                } }
                ,"reduction"
            ]
        } }
    } }
]

/**
 * 6. relationships()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice' AND c.name = 'Eskil'
 * RETURN relationships(p)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                "p"
                ,{ pattern: [
                    { node: { name: "a" } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: { name: "b" } }
                    ,{ edge: { direction: ">" } }
                    ,{ node: { name: "c" } }
                ] }
            ]
        } }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "AND"
            ,expressions: [
                { operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["a" ,"name"]
                        } }
                        ,{ literal: "Alice" }
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["c" ,"name"]
                        } }
                        ,{ literal: "Eskil" }
                    ]
                } }
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "relationships"
            ,argument: { expression: "p" }
        } }
    } }
]

/**
 * 7. reverse()
 *
 * WITH [4923,'abc',521, null, 487] AS ids
 * RETURN reverse(ids)
 */
[
    { clause: {
        name: "WITH"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: 4923 }
                    ,{ literal: 'abc' }
                    ,{ literal: 521 }
                    ,{ literal: null }
                    ,{ literal: 487 }
                ] }
                ,"ids"
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "reverse"
            ,argument: { expression: "ids" }
        } }
    } }
]

/**
 * 8. tail()
 *
 * MATCH (a) WHERE a.name = 'Eskil'
 * RETURN a.array, tail(a.array)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "a" } }] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "="
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["a" ,"name"]
                } }
                ,{ literal: "Eskil" }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "."
                ,expressions: ["a" ,"array"]
            } }
            ,{ function: {
                name: "tail"
                ,argument: { operator: {
                    name: "."
                    ,expressions: ["a" ,"array"]
                } }
            } }
        ]
    } }
]

/**
 * 9. toBooleanList()
 *
 * RETURN toBooleanList(null) as noList,
 * toBooleanList([null, null]) as nullsInList,
 * toBooleanList(['a string', true, 'false', null, ['A','B']]) as mixedList
 */
[
    { clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toBoleanList"
                        ,argument: { literal: null }
                    } }
                    ,"noList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toBoleanList"
                        ,argument: { literal: [
                            { literal: null }
                            ,{ literal: null }
                        ] }
                    } }
                    ,"nullsInList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toBoleanList"
                        ,argument: { literal: [
                            { literal: "a string" }
                            ,{ literal: true }
                            ,{ literal: "false" }
                            ,{ literal: null }
                            ,{ literal: [
                                { literal: "A" }
                                ,{ literal: "B" }
                            ] }
                        ] }
                    } }
                    ,"mixedList"
                ]
            } }
        ]
    } }
]

/**
 * 10. toFloatList()
 *
 * RETURN toFloatList(null) as noList,
 * toFloatList([null, null]) as nullsInList,
 * toFloatList(['a string', 2.5, '3.14159', null, ['A','B']]) as mixedList
 */
[
    { clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toFloatList"
                        ,argumnet: { literal: null }
                    } }
                    ,"noList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toFloatList"
                        ,argument: { literal: [
                            { literal: null }
                            ,{ literal: null }
                        ] }
                    } }
                    ,"nullsInList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toFloatList"
                        ,argument: { literal: [
                            { literal: "a string" }
                            ,{ literal: 2.5 }
                            ,{ literal: "3.14159" }
                            ,{ literal: null }
                            ,{ literal: [
                                { literal: "A" }
                                ,{ literal: "B" }
                            ] }
                        ] }
                    } }
                    ,"mixedList"
                ]
            } }
        ]
    } }
]

/**
 * 11. toIntegerList()
 *
 * RETURN toIntegerList(null) as noList,
 * toIntegerList([null, null]) as nullsInList,
 * toIntegerList(['a string', 2, '5', null, ['A','B']]) as mixedList
 */
[
    { clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toIntegerList"
                        ,argumnet: { literal: null }
                    } }
                    ,"noList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toIntegerList"
                        ,argument: { literal: [
                            { literal: null }
                            ,{ literal: null }
                        ] }
                    } }
                    ,"nullsInList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toIntegerList"
                        ,argument: { literal: [
                            { literal: "a string" }
                            ,{ literal: 2.5 }
                            ,{ literal: "5" }
                            ,{ literal: null }
                            ,{ literal: [
                                { literal: "A" }
                                ,{ literal: "B" }
                            ] }
                        ] }
                    } }
                    ,"mixedList"
                ]
            } }
        ]
    } }
]

/**
 * 12. toStringList()
 *
 * RETURN toStringList(null) as noList,
 * toStringList([null, null]) as nullsInList,
 * toStringList([
 *   'already a string',
 *   2,
 *   date({year:1955, month:11, day:5}),
 *   null,
 *   ['A','B']
 * ]) as mixedList
 */
[
    { clause: {
        name: "RETURN"
        ,expressions: [
            { operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toStringList"
                        ,argumnet: { literal: null }
                    } }
                    ,"noList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toStringList"
                        ,argument: { literal: [
                            { literal: null }
                            ,{ literal: null }
                        ] }
                    } }
                    ,"nullsInList"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { function: {
                        name: "toStringList"
                        ,argument: { literal: [
                            { literal: "already a string" }
                            ,{ literal: 2 }
                            ,{ function: {
                                name: "date"
                                ,argument: { literal: {
                                    year: { literal: 1955 }
                                    ,month: { literal: 11 }
                                    ,day: { literal: 5 }
                                } }
                            } }
                            ,{ literal: null }
                            ,{ literal: [
                                { literal: "A" }
                                ,{ literal: "B" }
                            ] }
                        ] }
                    } }
                    ,"mixedList"
                ]
            } }
        ]
    } }
]