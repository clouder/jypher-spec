/**
 * 1. coalesce()
 *
 * MATCH (a)
 * WHERE a.name = 'Alice'
 * RETURN coalesce(a.hairColor, a.eyes)
 */

/**
 * 2. endNode()
 *
 * MATCH (x:Developer)-[r]-()
 * RETURN endNode(r)
 */

/**
 * 3. head()
 *
 * MATCH (a)
 * WHERE a.name = 'Eskil'
 * RETURN a.liked_colors, head(a.liked_colors)
 */

/**
 * 4. id()
 *
 * MATCH (a)
 * RETURN id(a)
 */

/**
 * 5. last()
 *
 * MATCH (a)
 * WHERE a.name = 'Eskil'
 * RETURN a.liked_colors, last(a.liked_colors)
 */

/**
 * 6. length()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice'
 * RETURN length(p)
 */

/**
 * 7. properties()
 *
 * CREATE (p:Person {name: 'Stefan', city: 'Berlin'})
 * RETURN properties(p)
 */

/**
 * 8. randomUUID()
 *
 * RETURN randomUUID() AS uuid
 */

/**
 * 9. size()
 *
 * RETURN size(['Alice', 'Bob'])
 */

/**
 * 10. size() applied to pattern expression
 *
 * MATCH (a)
 * WHERE a.name = 'Alice'
 * RETURN size((a)-->()-->()) AS fof
 */

/**
 * 11. size() applied to string
 *
 * MATCH (a)
 * WHERE size(a.name) > 6
 * RETURN size(a.name)
 */

/**
 * 12. startNode()
 *
 * MATCH (x:Developer)-[r]-()
 * RETURN startNode(r)
 */

/**
 * 13. timestamp()
 *
 * RETURN timestamp()
 */

/**
 * 14. toBoolean()
 *
 * RETURN toBoolean('true'), toBoolean('not a boolean'), toBoolean(0)
 */

/**
 * 15. toBooleanOrNull()
 *
 * RETURN
 *   toBooleanOrNull('true'),
 *   toBooleanOrNull('not a boolean'),
 *   toBooleanOrNull(0),
 *   toBooleanOrNull(1.5)
 */

/**
 * 16. toFloat()
 *
 * RETURN toFloat('11.5'), toFloat('not a number')
 */

/**
 * 17. toFloatOrNull()
 *
 * RETURN
 *   toFloatOrNull('11.5'),
 *   toFloatOrNull('not a number'),
 *   toFloatOrNull(true)
 */

/**
 * 18. toInteger()
 *
 * RETURN toInteger('42'), toInteger('not a number'), toInteger(true)
 */

/**
 * 19. toIntegerOrNull()
 *
 * RETURN
 *   toIntegerOrNull('42'),
 *   toIntegerOrNull('not a number'),
 *   toIntegerOrNull(true),
 *   toIntegerOrNull(['A', 'B', 'C'])
 */

/**
 * 20. type()
 *
 * MATCH (n)-[r]->()
 * WHERE n.name = 'Alice'
 * RETURN type(r)
 */