/**
 * 2. Listing all procedures
 *
 * SHOW PROCEDURES
 */
[
    { clause: {
        name: "SHOW PROCEDURES"
    } }
]

/**
 * 3. Listing procedures with filtering on output columns
 *
 * SHOW PROCEDURES YIELD name, admin
 * WHERE admin
 */
[
    { clause: {
        name: "SHOW PROCEDURES"
        ,yield: { expressions: ["name" ,"admin"] }
    } }
    ,{ clause: { name: "WHERE", expression: "admin" } }
]

/**
 * 4. Listing procedures with other filtering
 *
 * SHOW PROCEDURES EXECUTABLE BY CURRENT USER YIELD *
 */
[
    { clause: {
        name: "SHOW PROCEDURES"
        ,modifier: { name: "EXECUTABLE BY CURRENT USER" }
        ,yield: { expression: "*" }
    } }
]

/**
 * SHOW PROCEDURES EXECUTABLE BY jake
 */
[
    { clause: {
        name: "SHOW PROCEDURES"
        ,modifier: { name: "EXECUTABLE BY", user: "jake" }
    } }
]