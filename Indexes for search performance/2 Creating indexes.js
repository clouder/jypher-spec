/**
 * 2.1. Create a single-property b-tree index for nodes
 *
 * CREATE INDEX node_index_name FOR (n:Person) ON (n.surname)
 */

/**
 * 2.2. Create a single-property b-tree index for relationships
 *
 * CREATE INDEX rel_index_name FOR ()-[r:KNOWS]-() ON (r.since)
 */

/**
 * 2.3. Create a single-property b-tree index only if it does not already exist
 *
 * CREATE INDEX node_index_name IF NOT EXISTS FOR (n:Person) ON (n.surname)
 */

/**
 * 2.6. Create a composite b-tree index for nodes
 *
 * CREATE INDEX node_index_name FOR (n:Person) ON (n.age, n.country)
 */

/**
 * 2.7. Create a composite b-tree index for relationships
 *
 * CREATE INDEX rel_index_name FOR ()-[r:PURCHASED]-() ON (r.date, r.amount)
 */

/**
 * 2.9. Create a node label lookup index
 *
 * CREATE LOOKUP INDEX node_label_lookup_index FOR (n) ON EACH labels(n)
 */

/**
 * 2.10. Create a relationship type lookup index
 *
 * CREATE LOOKUP INDEX rel_type_lookup_index FOR ()-[r]-() ON EACH type(r)
 */

/**
 * 2.11. Create a token lookup index specifying the index provider
 *
 * CREATE LOOKUP INDEX node_label_lookup_index_2 FOR (n) ON EACH labels(n) OPTIONS {indexProvider: 'token-lookup-1.0'}
 */

/**
 * 2.12. Create a node text index
 *
 * CREATE TEXT INDEX node_index_name FOR (n:Person) ON (n.nickname)
 */

/**
 * 2.13. Create a relationship text index
 *
 * CREATE TEXT INDEX rel_index_name FOR ()-[r:KNOWS]-() ON (r.interest)
 */

/**
 * 2.14. Create a text index only if it does not already exist
 *
 * CREATE TEXT INDEX node_index_name IF NOT EXISTS FOR (n:Person) ON (n.nickname)
 */

/**
 * 2.15. Create a text index specifying the index provider
 *
 * CREATE TEXT INDEX index_with_provider FOR ()-[r:TYPE]-() ON (r.prop1) OPTIONS {indexProvider: 'text-1.0'}
 */

/**
 * 2.16. Failure to create an already existing index
 *
 * CREATE INDEX bookTitleIndex FOR (book:Book) ON (book.title)
 */

/**
 * 2.17. Failure to create an index with the same name as an already existing index
 *
 * CREATE INDEX indexOnBooks FOR (book:Book) ON (book.numberOfPages)
 */

/**
 * 2.18. Failure to create an index when a constraint already exists
 *
 * CREATE INDEX bookIsbnIndex FOR (book:Book) ON (book.isbn)
 */

/**
 * 2.19. Failure to create an index with the same name as an already existing constraint
 *
 * CREATE INDEX bookRecommendations FOR (book:Book) ON (book.recommendations)
 */