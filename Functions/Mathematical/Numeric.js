/**
 * 1. abs()
 *
 * MATCH (a), (e) WHERE a.name = 'Alice' AND e.name = 'Eskil'
 * RETURN a.age, e.age, abs(a.age - e.age)
 */
[
    { clause: {
        name: "MATCH"
        ,expressions: [
            { pattern: [{ node: { name: "a" } }] }
            ,{ pattern: [{ node: { name: "e" } }] }
        ]
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
                            ,expressions: ["a", "name"]
                        } }
                        ,"Alice"
                    ]
                } }
                ,{ operator: {
                    name: "="
                    ,expressions: [
                        { operator: {
                            name: "."
                            ,expressions: ["e", "name"]
                        } }
                        ,"Eskil"
                    ]
                } }
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "." ,expressions: ["a" ,"age"] } }
            ,{ operator: { name: "." ,expressions: ["e" ,"age"] } }
            ,{ function: {
                name: "abs"
                ,argument: { operator: {
                    name: "-"
                    ,expressions: [
                        { operator: { name: "." ,expressions: ["a" ,"age"] } }
                        ,{ operator: { name: "." ,expressions: ["e" ,"age"] } }
                    ]
                } }
            } }
        ]
    } }
]

/**
 * 2. ceil()
 *
 * RETURN ceil(0.1)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "ceil"
            ,argument: { literal: 0.1 }
        } }
    } }
]

/**
 * 3. floor()
 *
 * RETURN floor(0.9)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "floor"
            ,argument: { literal: 0.9 }
        } }
    } }
]

/**
 * 4. rand()
 *
 * RETURN rand()
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "rand"
        } }
    } }
]

/**
 * 5. round()
 *
 * RETURN round(3.141592)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "round"
            ,argument: { literal: 3.141592 }
        } }
    } }
]

/**
 * 6. round(), with precision
 *
 * RETURN round(3.141592, 3)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "round"
            ,arguments: [{ literal: 3.141592 } ,{ literal: 3 }]
        } }
    } }
]

/**
 * 7. round(), with precision and rounding mode
 *
 * RETURN round(3.141592, 2, 'CEILING')
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "round"
            ,arguments: [
                { literal: 3.141592 }
                ,{ literal: 2 }
                ,{ literal: "CEILING" }
            ]
        } }
    } }
]

/**
 * 8. sign()
 *
 * RETURN sign(-17), sign(0.1)
 */
[
    { clause: {
        name: "RETURN"
        ,expressions: [
            { function: {
                name: "sign"
                ,arguments: { literal: -17 }
            } }
            ,{ function: {
                name: "sign"
                ,arguments: { literal: 0.1 }
            } }
        ]
    } }
]