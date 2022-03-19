/**
 * 4.1. Merge on a relationship
 *
 * MATCH (charlie:Person {name: 'Charlie Sheen'}), (wallStreet:Movie {title: 'Wall Street'})
 * MERGE (charlie)-[r:ACTED_IN]->(wallStreet)
 * RETURN charlie.name, type(r), wallStreet.title
 */

/**
 * 4.2. Merge on multiple relationships
 *
 * MATCH
 *   (oliver:Person {name: 'Oliver Stone'}),
 *   (reiner:Person {name: 'Rob Reiner'})
 * MERGE (oliver)-[:DIRECTED]->(movie:Movie)<-[:ACTED_IN]-(reiner)
 * RETURN movie
 */

/**
 * 4.3. Merge on an undirected relationship
 *
 * MATCH
 *   (charlie:Person {name: 'Charlie Sheen'}),
 *   (oliver:Person {name: 'Oliver Stone'})
 * MERGE (charlie)-[r:KNOWS]-(oliver)
 * RETURN r
 */

/**
 * 4.4. Merge on a relationship between two existing nodes
 *
 * MATCH (person:Person)
 * MERGE (city:City {name: person.bornIn})
 * MERGE (person)-[r:BORN_IN]->(city)
 * RETURN person.name, person.bornIn, city
 */

/**
 * 4.5. Merge on a relationship between an existing node
 * and a merged node derived from a node property
 *
 * MATCH (person:Person)
 * MERGE (person)-[r:HAS_CHAUFFEUR]->(chauffeur:Chauffeur {name: person.chauffeurName})
 * RETURN person.name, person.chauffeurName, chauffeur
 */