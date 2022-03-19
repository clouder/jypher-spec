/**
 * 2. Remove a property
 *
 * MATCH (a {name: 'Andy'})
 * REMOVE a.age
 * RETURN a.name, a.age
 */

/**
 * 4. Remove a label from a node
 *
 * MATCH (n {name: 'Peter'})
 * REMOVE n:German
 * RETURN n.name, labels(n)
 */

/**
 * 5. Remove multiple labels from a node
 *
 * MATCH (n {name: 'Peter'})
 * REMOVE n:German:Swedish
 * RETURN n.name, labels(n)
 */