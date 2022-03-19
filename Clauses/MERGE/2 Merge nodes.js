/**
 * 2.1. Merge single node with a label
 *
 * MERGE (robert:Critic)
 * RETURN robert, labels(robert)
 */

/**
 * 2.2. Merge single node with properties
 *
 * MERGE (charlie {name: 'Charlie Sheen', age: 10})
 * RETURN charlie
 */

/**
 * 2.3. Merge single node specifying both label and property
 *
 * MERGE (michael:Person {name: 'Michael Douglas'})
 * RETURN michael.name, michael.bornIn
 */

/**
 * 2.4. Merge single node derived from an existing node property
 *
 * MATCH (person:Person)
 * MERGE (city:City {name: person.bornIn})
 * RETURN person.name, person.bornIn, city
 */