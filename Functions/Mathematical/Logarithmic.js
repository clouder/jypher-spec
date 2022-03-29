/**
 * 1. e()
 *
 * RETURN e()
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: { name: "e" } }
    } }
]

/**
 * 2. exp()
 *
 * RETURN exp(2)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: { name: "exp" ,argument: { literal: 2 } } }
    } }
]

/**
 * 3. log()
 *
 * RETURN log(27)
 */
 [
    { clause: {
        name: "RETURN"
        ,expression: { function: { name: "log" ,argument: { literal: 27 } } }
    } }
]

/**
 * 4. log10()
 *
 * RETURN log10(27)
 */
 [
    { clause: {
        name: "RETURN"
        ,expression: { function: { name: "log10" ,argument: { literal: 27 } } }
    } }
]

/**
 * 5. sqrt()
 *
 * RETURN sqrt(256)
 */
 [
    { clause: {
        name: "RETURN"
        ,expression: { function: { name: "sqrt" ,argument: { literal: 256 } } }
    } }
]