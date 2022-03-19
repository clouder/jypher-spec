/**
 * 2. Importing variables into subqueries
 *
 * UNWIND [0, 1, 2] AS x
 * CALL {
 *   WITH x
 *   RETURN x * 10 AS y
 * }
 * RETURN x, y
 */

/**
 * 3. Post-union processing
 *
 * CALL {
 *   MATCH (p:Person)
 *   RETURN p
 *   ORDER BY p.age ASC
 *   LIMIT 1
 * UNION
 *   MATCH (p:Person)
 *   RETURN p
 *   ORDER BY p.age DESC
 *   LIMIT 1
 * }
 * RETURN p.name, p.age
 * ORDER BY p.name
 */

/**
 * 4. Aggregations
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   MATCH (p)-[:FRIEND_OF]-(c:Person)
 *   RETURN c.name AS friend
 * }
 * RETURN p.name, friend
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   MATCH (p)--(c)
 *   RETURN count(c) AS numberOfConnections
 * }
 * RETURN p.name, numberOfConnections
 */

/**
 * 5. Unit subqueries and side-effects
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   UNWIND range (1, 5) AS i
 *   CREATE (:Person {name: p.name})
 * }
 * RETURN count(*)
 */

/**
 * 6. Aggregation on imported variables
 *
 * MATCH (p:Person)
 * CALL {
 *   WITH p
 *   MATCH (other:Person)
 *   WHERE other.age < p.age
 *   RETURN count(other) AS youngerPersonsCount
 * }
 * RETURN p.name, youngerPersonsCount
 */

/**
 * 7. Subqueries in transactions
 *
 * LOAD CSV FROM 'file:///friends.csv' AS line
 * CALL {
 *   WITH line
 *   CREATE (:PERSON {name: line[1], age: toInteger(line[2])})
 * } IN TRANSACTIONS
 */

/**
 * 7.1. Batching
 *
 * LOAD CSV FROM 'file:///friends.csv' AS line
 * CALL {
 *   WITH line
 *   CREATE (:Person {name: line[1], age: toInteger(line[2])})
 * } IN TRANSACTIONS OF 2 ROWS
 *
 * MATCH (n)
 * CALL {
 *   WITH n
 *   DETACH DELETE n
 * } IN TRANSACTIONS OF 2 ROWS
 */

/**
 * 7.2. Errors
 *
 * UNWIND [4, 2, 1, 0] AS i
 * CALL {
 *   WITH i
 *   CREATE (:Example {num: 100/i})
 * } IN TRANSACTIONS OF 2 ROWS
 * RETURN i
 */