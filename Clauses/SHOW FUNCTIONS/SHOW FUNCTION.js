/**
 * 2. Listing all functions
 *
 * SHOW FUNCTIONS
 */
[
    { clause: {
        name: "SHOW FUNCTIONS"
    } }
]

/**
 * 3. Listing functions with filtering on output columns
 *
 * SHOW BUILT IN FUNCTIONS YIELD name, isBuiltIn
 * WHERE name STARTS WITH 'a'
 */
[
    { clause: {
        name: "SHOW FUNCTION"
        ,modifier: { name: "BUILT IN" }
        ,yield: { expressions: ["name" ,"isBultIn"] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "STARTS WITH"
            ,expressions: ["name" ,{ literal: "a" }]
        } }
    } }
]

/**
 * 4. Listing functions with other filtering
 *
 * SHOW FUNCTIONS EXECUTABLE BY CURRENT USER YIELD *
 */
[
    { clause: {
        name: "SHOW FUNCTION"
        ,modifier: { name: "EXECUTABLE BY CURRENT USER" }
        ,yield: { expression: "*" }
    } }
]