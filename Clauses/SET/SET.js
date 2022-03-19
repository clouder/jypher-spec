/**
 * 2. Set a property
 *
 * MATCH (n {name: 'Andy'})
 * SET n.surname = 'Taylor'
 * RETURN n.name, n.surname
 *
 * MATCH (n {name: 'Andy'})
 * SET (CASE WHEN n.age = 36 THEN n END).worksIn = 'Malmo'
 * RETURN n.name, n.worksIn
 *
 * MATCH (n {name: 'Andy'})
 * SET (CASE WHEN n.age = 55 THEN n END).worksIn = 'Malmo'
 * RETURN n.name, n.worksIn
 */

/**
 * 3. Update a property
 *
 * MATCH (n {name: 'Andy'})
 * SET n.age = toString(n.age)
 * RETURN n.name, n.age
 */

/**
 * 4. Remove a property
 *
 * MATCH (n {name: 'Andy'})
 * SET n.name = null
 * RETURN n.name, n.age
 */

/**
 * 5. Copy properties between nodes and relationships
 *
 * MATCH (at {name: 'Andy'}), (pn {name: 'Peter'})
 * SET at = pn
 * RETURN at.name, at.age, at.hungry, pn.name, pn.age
 */

/**
 * 6. Replace all properties using a map and =
 *
 * MATCH (p {name: 'Peter'})
 * SET p = {name: 'Peter Smith', position: 'Entrepreneur'}
 * RETURN p.name, p.age, p.position
 */

/**
 * 7. Remove all properties using an empty map and =
 *
 * MATCH (p {name: 'Peter'})
 * SET p = {}
 * RETURN p.name, p.age
 */

/**
 * 8. Mutate specific properties using a map and +=
 *
 * MATCH (p {name: 'Peter'})
 * SET p += {age: 38, hungry: true, position: 'Entrepreneur'}
 * RETURN p.name, p.age, p.hungry, p.position
 *
 * MATCH (p {name: 'Peter'})
 * SET p += {}
 * RETURN p.name, p.age
 */

/**
 * 9. Set multiple properties using one SET clause
 *
 * MATCH (n {name: 'Andy'})
 * SET n.position = 'Developer', n.surname = 'Taylor'
 */

/**
 * 10. Set a property using a parameter
 *
 * MATCH (n {name: 'Andy'})
 * SET n.surname = $surname
 * RETURN n.name, n.surname
 */

/**
 * 11. Set all properties using a parameter
 *
 * MATCH (n {name: 'Andy'})
 * SET n = $props
 * RETURN n.name, n.position, n.age, n.hungry
 */

/**
 * 12. Set a label on a node
 *
 * MATCH (n {name: 'Stefan'})
 * SET n:German
 * RETURN n.name, labels(n) AS labels
 */

/**
 * 13. Set multiple labels on a node
 *
 * MATCH (n {name: 'George'})
 * SET n:Swedish:Bossman
 * RETURN n.name, labels(n) AS labels
 */