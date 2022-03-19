/**
 * 2. Delete single node
 *
 * MATCH (n:Person {name: 'UNKNOWN'})
 * DELETE n
 */

/**
 * 3. Delete all nodes and relationships
 *
 * MATCH (n)
 * DETACH DELETE n
 */

/**
 * 4. Delete a node with all its relationships
 *
 * MATCH (n {name: 'Andy'})
 * DETACH DELETE n
 */

/**
 * 5. Delete relationships only
 *
 * MATCH (n {name: 'Andy'})-[r:KNOWS]->()
 * DELETE r
 */