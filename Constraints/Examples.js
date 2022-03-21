/**
 * 1. Unique node property constraints
 *
 * Create a unique constraint
 *
 * CREATE CONSTRAINT constraint_name FOR (book:Book) REQUIRE book.isbn IS UNIQUE
 */

/**
 * Create a unique constraint only if it does not already exist
 *
 * CREATE CONSTRAINT constraint_name IF NOT EXISTS FOR (book:Book) REQUIRE book.isbn IS UNIQUE
 */

/**
 * Create a unique constraint with specified index provider and configuration
 *
 * CREATE CONSTRAINT constraint_with_options FOR (n:Label) REQUIRE (n.prop1, n.prop2) IS UNIQUE
 * OPTIONS {
 *   indexProvider: 'lucene+native-3.0',
 *   indexConfig: {`spatial.wgs-84.min`: [-100.0, -80.0], `spatial.wgs-84.max`: [100.0, 80.0]}
 * }
 */

/**
 * 5. Drop a constraint by name
 *
 * DROP CONSTRAINT constraint_name
 *
 * DROP CONSTRAINT missing_constraint_name IF EXISTS
 */

/**
 * 6. Listing constraints
 *
 * SHOW CONSTRAINTS
 */