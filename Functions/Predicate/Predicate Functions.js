/**
 * 1. all()
 *
 * MATCH p = (a)-[*1..3]->(b)
 * WHERE
 *   a.name = 'Alice'
 *   AND b.name = 'Daniel'
 *   AND all(x IN nodes(p) WHERE x.age > 30)
 * RETURN p
 */

/**
 * 2. any()
 *
 * MATCH (n)
 * WHERE any(color IN n.liked_colors WHERE color = 'yellow')
 * RETURN n
 */

/**
 * 3. exists()
 *
 * MATCH (n)
 * WHERE exists(n.name)
 * RETURN
 *   n.name AS name,
 *   exists((n)-[:MARRIED]->()) AS is_married
 */

/**
 * 3. exists()
 *
 * MATCH (a), (b)
 * WHERE exists(a.name) AND NOT exists(b.name)
 * OPTIONAL MATCH (c:DoesNotExist)
 * RETURN
 *   a.name AS a_name,
 *   b.name AS b_name,
 *   exists(b.name) AS b_has_name,
 *   c.name AS c_name,
 *   exists(c.name) AS c_has_name
 * ORDER BY a_name, b_name, c_name
 * LIMIT 1
 */

/**
 * 4. isEmpty()
 *
 * MATCH (n)
 * WHERE NOT isEmpty(n.liked_colors)
 * RETURN n
 */

/**
 * 4. isEmpty()
 *
 * MATCH (n)
 * WHERE isEmpty(properties(n))
 * RETURN n
 */

/**
 * 4. isEmpty()
 * 
 * MATCH (n)
 * WHERE isEmpty(n.eyes)
 * RETURN n.age AS age
 */

/**
 * 5. none()
 *
 * MATCH p = (n)-[*1..3]->(b)
 * WHERE n.name = 'Alice' AND none(x IN nodes(p) WHERE x.age = 25)
 * RETURN p
 */

/**
 * 6. single()
 *
 * MATCH p = (n)-->(b)
 * WHERE
 *   n.name = 'Alice'
 *   AND single(var IN nodes(p) WHERE var.eyes = 'blue')
 * RETURN p
 */