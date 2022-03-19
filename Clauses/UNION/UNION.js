/**
 * 2. Combine two queries and retain duplicates
 *
 * MATCH (n:Actor)
 * RETURN n.name AS name
 * UNION ALL
 * MATCH (n:Movie)
 * RETURN n.title AS name
 */

/**
 * 3. Combine two queries and remove duplicates
 *
 * MATCH (n:Actor)
 * RETURN n.name AS name
 * UNION
 * MATCH (n:Movie)
 * RETURN n.title AS name
 */