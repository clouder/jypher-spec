/**
 * 2.1. Create a relationship between two nodes
 *
 * MATCH (a:Person), (b:Person)
 * WHERE a.name = 'A' AND b.name = 'B'
 * CREATE (a)-[r:RELTYPE]->(b)
 * RETURN type(r)
 */

/**
 * 2.2. Create a relationship and set properties
 *
 * MATCH (a:Person), (b:Person)
 * WHERE a.name = 'A' AND b.name = 'B'
 * CREATE (a)-[r:RELTYPE {name: a.name + '<->' + b.name}]->(b)
 * RETURN type(r), r.name
 */