/**
 * 2. Skip first three rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * SKIP 3
 */

/**
 * 3. Return middle two rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * SKIP 1
 * LIMIT 2
 */

/**
 * 4. Using an expression with SKIP to return a subset of the rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * SKIP 1 + toInteger(3*rand())
 */