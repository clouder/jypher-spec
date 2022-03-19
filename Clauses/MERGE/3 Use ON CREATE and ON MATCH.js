/**
 * 3.1. Merge with ON CREATE
 *
 * MERGE (keanu:Person {name: 'Keanu Reeves'})
 * ON CREATE
 *   SET keanu.created = timestamp()
 * RETURN keanu.name, keanu.created
 */

/**
 * 3.2. Merge with ON MATCH
 *
 * MERGE (person:Person)
 * ON MATCH
 *   SET person.found = true
 * RETURN person.name, person.found
 */

/**
 * 3.3. Merge with ON CREATE and ON MATCH
 *
 * MERGE (keanu:Person {name: 'Keanu Reeves'})
 * ON CREATE
 *   SET keanu.created = timestamp()
 * ON MATCH
 *   SET keanu.lastSeen = timestamp()
 * RETURN keanu.name, keanu.created, keanu.lastSeen
 */

/**
 * 3.4. Merge with ON MATCH setting multiple properties
 *
 * MERGE (person:Person)
 * ON MATCH
 *   SET
 *     person.found = true,
 *     person.lastAccessed = timestamp()
 * RETURN person.name, person.found, person.lastAccessed
 */