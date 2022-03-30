/**
 * 1. acos()
 *
 * RETURN acos(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "acos"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]

/**
 * 2. asin()
 *
 * RETURN asin(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "asin"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]

/**
 * 3. atan()
 *
 * RETURN atan(0.5)
 */[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "atan"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
 ]

/**
 * 4. atan2()
 *
 * RETURN atan2(0.5, 0.6)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "acos"
            ,arguments: [{ literal: 0.5 }, { literal: 0.6 }]
        } }
    } }
]

/**
 * 5. cos()
 *
 * RETURN cos(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "cos"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]

/**
 * 6. cot()
 *
 * RETURN cot(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "cot"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]

/**
 * 7. degrees()
 *
 * RETURN degrees(3.14159)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "degrees"
            ,arguments: [{ literal: 3.14159 }]
        } }
    } }
]

/**
 * 8. haversin()
 *
 * RETURN haversin(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "haversin"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]

/**
 * 9. Spherical distance using the haversin() function
 *
 * CREATE (ber:City {lat: 52.5, lon: 13.4}), (sm:City {lat: 37.5, lon: -122.3})
 * RETURN 2 * 6371 * asin(sqrt(haversin(radians( sm.lat - ber.lat ))
 *   + cos(radians( sm.lat )) * cos(radians( ber.lat )) *
 *   haversin(radians( sm.lon - ber.lon )))) AS dist
 */

/**
 * asin(
 *  sqrt(
 *      haversin(
 *          radians(
 *              . - .
 *          )
 *      )
 *      +
 *      cos(
 *          radians(
 *              .
 *          )
 *      )
 *      *
 *      cos(
 *          radians(
 *              .
 *          )
 *      )
 *      *
 *      haversin(
 *          radians(
 *              . - .
 *          )
 *      )
 *   )
 * )
 */
[
    { clause: {
        name: "CREATE"
        ,expressions: []
    } }
    ,{ clause: {
        name: "RETURN"
        ,expression: { operator: {
            name: "AS"
            ,expressions: [
                { operator: {
                    name: "*"
                    ,expressions: [
                        { literal: 2 }
                        ,{ literal: 6371 }
                        ,{ function: {
                            name: "asin"
                            ,argument: {}
                        } }
                    ]
                }}
                ,"dist"
            ]
        } }
    } }
]

/**
 * 10. pi()
 *
 * RETURN pi()
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "pi"
        } }
    } }
]

/**
 * 11. radians()
 *
 * RETURN radians(180)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "radians"
            ,arguments: [{ literal: 180 }]
        } }
    } }
]

/**
 * 12. sin()
 *
 * RETURN sin(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "sin"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]

/**
 * 13. tan()
 *
 * RETURN tan(0.5)
 */
[
    { clause: {
        name: "RETURN"
        ,expression: { function: {
            name: "tan"
            ,arguments: [{ literal: 0.5 }]
        } }
    } }
]