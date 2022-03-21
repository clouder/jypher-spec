/**
 * 2. Create and configure full-text indexes
 *
 * CREATE FULLTEXT INDEX titlesAndDescriptions FOR (n:Movie|Book) ON EACH [n.title, n.description]
 *
 * CREATE FULLTEXT INDEX taggedByRelationshipIndex FOR ()-[r:TAGGED_AS]-() ON EACH [r.taggedByUser] OPTIONS {indexConfig: {`fulltext.analyzer`: 'url_or_email', `fulltext.eventually_consistent`: true}}
 */

/**
 * 3. Query full-text indexes
 *
 * CALL db.index.fulltext.queryNodes("titlesAndDescriptions", "Full Metal Jacket") YIELD node, score
 * RETURN node.title, score
 *
 * CALL db.index.fulltext.queryNodes("titlesAndDescriptions", '"Full Metal Jacket"') YIELD node, score
 * RETURN node.title, score
 *
 * CALL db.index.fulltext.queryNodes("titlesAndDescriptions", 'full AND metal') YIELD node, score
 * RETURN node.title, score
 *
 * CALL db.index.fulltext.queryNodes("titlesAndDescriptions", 'description:"surreal adventure"') YIELD node, score
 * RETURN node.title, node.description, score
 */

/**
 * 4. Drop full-text indexes
 *
 * DROP INDEX taggedByRelationshipIndex
 */