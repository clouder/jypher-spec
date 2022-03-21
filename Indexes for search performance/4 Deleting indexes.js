/**
 * 4. Deleting indexes
 *
 * 4.1. Drop an index
 *
 * DROP INDEX index_name
 */

/**
 * 4.2. Drop a non-existing index
 *
 * DROP INDEX missing_index_name IF EXISTS
 */

/**
 * 5. Future indexes
 *
 * 5.3. Create a single-property range index for nodes
 *
 * CREATE RANGE INDEX node_range_index_name FOR (n:Person) ON (n.surname)
 */

/**
 * 5.4. Create a single-property range index for relationships
 *
 * CREATE RANGE INDEX rel_range_index_name FOR ()-[r:KNOWS]-() ON (r.since)
 */

/**
 * 5.5. Create a range index only if it does not already exist
 *
 * CREATE INDEX node_range_index_name IF NOT EXISTS FOR (n:Person) ON (n.surname)
 */

/**
 * 5.6. Create a range index specifying the index provider
 *
 * CREATE RANGE INDEX range_index_with_provider FOR ()-[r:TYPE]-() ON (r.prop1) OPTIONS {indexProvider: 'range-1.0'}
 */

/**
 * 5.7. Create a composite range index for nodes
 *
 * CREATE RANGE INDEX composite_range_node_index_name FOR (n:Person) ON (n.age, n.country)
 */

/**
 * 5.8. Create a composite range index for relationships
 *
 * CREATE RANGE INDEX composite_range_rel_index_name FOR ()-[r:PURCHASED]-() ON (r.date, r.amount)
 */

/**
 * 5.9. Create a node point index
 *
 * CREATE POINT INDEX node_index_name FOR (n:Person) ON (n.location)
 */

/**
 * 5.10. Create a relationship point index
 *
 * CREATE POINT INDEX rel_index_name FOR ()-[r:STREET]-() ON (r.intersection)
 */

/**
 * 5.11. Create a point index only if it does not already exist
 *
 * CREATE POINT INDEX node_index_name IF NOT EXISTS FOR (n:Person) ON (n.location)
 */

/**
 * 5.12. Create a point index specifying the index provider
 *
 * CREATE POINT INDEX index_with_provider FOR (n:Label) ON (n.prop1) OPTIONS {indexProvider: 'point-1.0'}
 */

/**
 * 5.13. Create a point index specifying the index configuration
 *
 * CREATE POINT INDEX index_with_config FOR (n:Label) ON (n.prop2)
 * OPTIONS {indexConfig: {`spatial.cartesian.min`: [-100.0, -100.0], `spatial.cartesian.max`: [100.0, 100.0]}}
 */

/**
 * 5.14. Create a point index specifying both the index provider and configuration
 *
 * CREATE POINT INDEX index_with_options FOR ()-[r:TYPE]-() ON (r.prop1)
 * OPTIONS {
 *   indexProvider: 'point-1.0',
 *   indexConfig: {`spatial.wgs-84.min`: [-100.0, -80.0], `spatial.wgs-84.max`: [100.0, 80.0]}
 * }
 */