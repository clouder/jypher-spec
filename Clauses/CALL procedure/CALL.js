/**
 * 2. Call a procedure using CALL
 *
 * CALL db.labels()
 */

/**
 * 3. View the signature for a procedure
 *
 * CALL dbms.procedures() YIELD name, signature
 * WHERE name='dbms.listConfig'
 * RETURN signature
 */

/**
 * 4. Call a procedure using a quoted namespace and name
 *
 * CALL `db`.`labels()`
 */

/**
 * 5. Call a procedure with literal arguments
 *
 * CALL dbms.security.createUser('example_username', 'example_password', false)
 */

/**
 * 6. Call a procedure with parameter arguments
 *
 * CALL dbms.security.createUser($username, $password, $requirePasswordChange)
 */

/**
 * 7. Call a procedure with mixed literal and parameter arguments
 *
 * CALL dbms.security.createUser('example_username', $password, false)
 */

/**
 * 8. Call a procedure with literal and default arguments
 *
 * CALL dbms.security.createUser('example_username', 'example_password')
 */

/**
 * 9. Call a procedure using CALL YIELD *
 *
 * CALL db.labels() YIELD *
 */

/**
 * 10. Call a procedure within a complex query using CALL YIELD
 *
 * CALL db.labels() YIELD label
 * RETURN count(label) AS numLabels
 */

/**
 * 11. Call a procedure and filter its results
 *
 * CALL db.labels() YIELD label
 * WHERE label CONTAINS 'User'
 * RETURN count(label) AS numLabels
 */

/**
 * 12. Call a procedure within a complex query and rename its outputs
 *
 * CALL db.propertyKeys() YIELD propertyKey AS prop
 * MATCH (n)
 * WHERE n[prop] IS NOT NULL
 * RETURN prop, count(n) AS numNodes
 */