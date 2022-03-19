/**
 * 2. Return a limited subset of the rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * LIMIT 3
 */

/**
 * 3. Using an expression with LIMIT to return a subset of the rows
 *
 * MATCH (n)
 * RETURN n.name
 * ORDER BY n.name
 * LIMIT 1 + toInteger(3 * rand())
 */

/**
 * 4. LIMIT will not stop side effects
 *
 * CREATE (n)
 * RETURN n
 * LIMIT 0
 *
 * MATCH (n {name: 'A'})
 * SET n.age = 60
 * RETURN n
 * LIMIT 0
 *
 * MATCH (n)
 * WITH n LIMIT 1
 * SET n.locked = true
 * RETURN n
 */