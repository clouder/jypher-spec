/**
 * 1. avg() - Numeric values
 *
 * MATCH (n:Person)
 * RETURN avg(n.age)
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
            name: "avg"
            ,argument: { operator: {
                name: "."
                ,expressions: ["n" ,"age"]
            } }
        } }
    } }
]

/**
 * 2. avg() - Durations
 *
 * UNWIND [duration('P2DT3H'), duration('PT1H45S')] AS dur
 * RETURN avg(dur)
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
                        ,argument: { literal: "P2DT3H"}
                    } }
                    ,{ function: {
                        name: "duration"
                        ,argument: { literal: "PT1H45S"}
                    } }
                ] }
                ,"dur"
            ]
        } }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "avg"
            ,argument: { expression: "dur"}
        } }
    } }
]

/**
 * 3. collect()
 *
 * MATCH (n:Person)
 * RETURN collect(n.age)
 */
[
    { clause: {
        name: "MATCH"
        ,expression: { pattern: [{ node: { name: "n" ,label: "Person" } }] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "collect"
            ,argument: { operator: { name: "." ,expressions: ["n" ,"age"] } }
        } }
    } }
]