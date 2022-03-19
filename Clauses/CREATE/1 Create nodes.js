/**
 * 1.1. Create single node
 *
 * CREATE (n)
 */

/**
 * 1.2. Create multiple nodes
 *
 * CREATE (n), (m)
 */

/**
 * 1.3. Create a node with a label
 *
 * CREATE (n:Person)
 */

/**
 * 1.4. Create a node with multiple labels
 *
 * CREATE (n:Person:Swedish)
 */

/**
 * 1.5. Create node and add labels and properties
 *
 * CREATE (n:Person {name: 'Andy', title: 'Developer'})
 */

/**
 * 1.6. Return created node
 *
 * CREATE (a {name: 'Andy'})
 * RETURN a.name
 */