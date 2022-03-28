/**
 * 5. max()
 *
 * UNWIND [1, 'a', null, 0.2, 'b', '1', '99'] AS val
 * RETURN max(val)
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: 1 }
                    ,{ literal: "a" }
                    ,{ literal: null }
                    ,{ literal: 0.2 }
                    ,{ literal: "b" }
                    ,{ literal: "1" }
                    ,{ literal: "99" }
                ] }
                ,"val"
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "max"
            ,argument: { expression: "val" }
        } }
    } }
]

/**
 * UNWIND [[1, 'a', 89], [1, 2]] AS val
 * RETURN max(val)
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: [
                        { literal: 1 }
                        ,{ literal: "a" }
                        ,{ literal: 89 }
                    ] }
                    ,{ literal: [{ literal: 1 } ,{ literal: 2 }] }
                ] }
                ,"val"
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "max"
            ,argument: { expression: "val" }
        } }
    } }
]

/**
 * MATCH (n:Person)
 * RETURN max(n.age)
 */
[
    { clause: {
        name: "MATCH"
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "max"
            ,argument: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]

/**
 * 6. min()
 *
 * UNWIND [1, 'a', null, 0.2, 'b', '1', '99'] AS val
 * RETURN min(val)
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: 1 }
                    ,{ literal: "a" }
                    ,{ literal: null }
                    ,{ literal: 0.2 }
                    ,{ literal: "b" }
                    ,{ literal: "1" }
                    ,{ literal: "99" }
                ] }
                ,"val"
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "min"
            ,argument: { expression: "val" }
        } }
    } }
]

/**
 * UNWIND ['d', [1, 2], ['a', 'c', 23]] AS val
 * RETURN min(val)
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { literal: "d" }
                    ,{ literal: [{ literal: 1 } ,{ literal: 2 }] }
                    ,{ literal: [
                        { literal: "a" }
                        ,{ literal: "c" }
                        ,{ literal: 23 }
                    ]}
                ]}
                ,"val"
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "min"
            ,argument: { expression: "val" }
        } }
    } }
]

/**
 * MATCH (n:Person)
 * RETURN min(n.age)
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
            name: "min"
            ,argumnet: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]

/**
 * 7. percentileCont()
 *
 * MATCH (n:Person)
 * RETURN percentileCont(n.age, 0.4)
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
            name: "percentileCont"
            ,arguments: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"age"]
                } }
                ,{ literal: 0.4 }
            ]
        } }
    } }
]

/**
 * 8. percentileDisc()
 *
 * MATCH (n:Person)
 * RETURN percentileDisc(n.age, 0.5)
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
            name: "percentileDisc"
            ,arguments: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"age"]
                } }
                ,{ literal: 0.5 }
            ]
        } }
    } }
]

/**
 * 9. stDev()
 *
 * MATCH (n)
 * WHERE n.name IN ['A', 'B', 'C']
 * RETURN stDev(n.age)
 */
[
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "IN"
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"name"]
                } }
                ,{ literal: [
                    { literal: "A" }
                    ,{ literal: "B" }
                    ,{ literal: "C" }
                ] }
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "stDev"
            ,argument: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]

/**
 * 10. stDevP()
 *
 * MATCH (n)
 * WHERE n.name IN ['A', 'B', 'C']
 * RETURN stDevP(n.age)
 */
 [
    { clause: {
        name: "MATCH", expression: { pattern: [{ node: { name: "n" } }] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "IN"
            ,expressions: [
                { operator: {
                    name: "."
                    ,expressions: ["n" ,"name"]
                } }
                ,{ literal: [
                    { literal: "A" }
                    ,{ literal: "B" }
                    ,{ literal: "C" }
                ] }
            ]
        }}
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "stDevP"
            ,argument: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]


/**
 * 11. sum() - Numeric values
 *
 * MATCH (n:Person)
 * RETURN sum(n.age)
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
            name: "sum"
            ,argument: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]

/**
 * UNWIND [duration('P2DT3H'), duration('PT1H45S')] AS dur
 * RETURN sum(dur)
 */
[
    { clause: {
        name: "UNWIND"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { literal: [
                    { function: {
                        name: "duration"
                        ,argument: { literal: "P2DT3H" }
                    } }
                    ,{ function: {
                        name: "duration"
                        ,argument: { literal: "PT1H45S" }
                    } }
                ] }
                ,"dur"
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "sum"
            ,argument: { expression: "dur" }
        } }
    } }
]