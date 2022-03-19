/**
 * 2. Unwinding a list
 *
 * UNWIND [1, 2, 3, null] AS x
 * RETURN x, 'val' AS y
 */

/**
 * 3. Creating a distinct list
 *
 * WITH [1, 1, 2, 2] AS coll
 * UNWIND coll AS x
 * WITH DISTINCT x
 * RETURN collect(x) AS setOfVals
 */

/**
 * 4. Using UNWIND with any expression returning a list
 *
 * WITH
 * [1, 2] AS a,
 * [3, 4] AS b
 * UNWIND (a + b) AS x
 * RETURN x
 */

/**
 * 5. Using UNWIND with a list of lists
 *
 * WITH [[1, 2], [3, 4], 5] AS nested
 * UNWIND nested AS x
 * UNWIND x AS y
 * RETURN y
 */

/**
 * 6. Using UNWIND with an empty list
 *
 * UNWIND [] AS empty
 * RETURN empty, 'literal_that_is_not_returned'
 */

/**
 * 7. Using UNWIND with an expression that is not a list
 *
 * UNWIND null AS x
 * RETURN x, 'some_literal'
 */

/**
 * [NOTICE]
 * UNSURE IF THIS IS APPLICABLE TO Jypher
 *
 * 8. Creating nodes from a list parameter
 *
 * UNWIND $events AS event
 * MERGE (y:Year {year: event.year})
 * MERGE (y)<-[:IN]-(e:Event {id: event.id})
 * RETURN e.id AS x ORDER BY x
 */