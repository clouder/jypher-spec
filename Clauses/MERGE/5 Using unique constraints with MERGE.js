/**
 * 5.1. Merge using unique constraints creates a new node if no node is found
 *
 * MERGE (laurence:Person {name: 'Laurence Fishburne'})
 * RETURN laurence.name
 */

/**
 * 5.2. Merge using unique constraints matches an existing node
 *
 * MERGE (oliver:Person {name: 'Oliver Stone'})
 * RETURN oliver.name, oliver.bornIn
 */

/**
 * 5.3. Merge with unique constraints and partial matches
 *
 * MERGE (michael:Person {name: 'Michael Douglas', role: 'Gordon Gekko'})
 * RETURN michael
 */

/**
 * 5.4. Merge with unique constraints and conflicting matches
 *
 * MERGE (oliver:Person {name: 'Oliver Stone', role: 'Gordon Gekko'})
 * RETURN oliver
 */

/**
 * 5.5. Using map parameters with MERGE
 *
 * MERGE (person:Person {name: $param.name, role: $param.role})
 * RETURN person.name, person.role
 */