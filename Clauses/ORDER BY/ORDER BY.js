/**
 * 2. Order nodes by property
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY n.name
 */

/**
 * 3. Order nodes by multiple properties
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY n.age, n.name
 */

/**
 * 4. Order nodes by id
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY id(n)
 */

/**
 * 5. Order nodes by expression
 *
 * MATCH (n)
 * RETURN n.name, n.age, n.length
 * ORDER BY keys(n)
 */

/**
 * 6. Order nodes in descending order
 *
 * MATCH (n)
 * RETURN n.name, n.age
 * ORDER BY n.name DESC
 */

/**
 * 7. Ordering null
 *
 * MATCH (n)
 * RETURN n.length, n.name, n.age
 * ORDER BY n.length
 */

/**
 * 8. Ordering in a WITH clause
 *
 * MATCH (n)
 * WITH n ORDER BY n.age
 * RETURN collect(n.name) AS names
 */