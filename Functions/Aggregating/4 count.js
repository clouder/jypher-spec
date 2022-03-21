/**
 * 4.1. Using count(*) to return the number of nodes
 *
 * MATCH (n {name: 'A'})-->(x)
 * RETURN labels(n), n.age, count(*)
 */

/**
 * 4.2. Using count(*) to group and count relationship types
 *
 * MATCH (n {name: 'A'})-[r]->()
 * RETURN type(r), count(*)
 */

/**
 * 4.3. Using count(expression) to return the number of values
 *
 * MATCH (n {name: 'A'})-->(x)
 * RETURN count(x)
 */

/**
 * 4.4. Counting non-null values
 *
 * MATCH (n:Person)
 * RETURN count(n.age)
 */

/**
 * 4.5. Counting with and without duplicates
 *
 * MATCH (me:Person)-->(friend:Person)-->(friend_of_friend:Person)
 * WHERE me.name = 'A'
 * RETURN count(DISTINCT friend_of_friend), count(friend_of_friend)
 */