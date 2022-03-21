/**
 * 1. keys()
 *
 * MATCH (a) WHERE a.name = 'Alice'
 * RETURN keys(a)
 */

/**
 * 2. labels()
 *
 * MATCH (a) WHERE a.name = 'Alice'
 * RETURN labels(a)
 */

/**
 * 3. nodes()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice' AND c.name = 'Eskil'
 * RETURN nodes(p)
 */

/**
 * 4. range()
 *
 * RETURN range(0, 10), range(2, 18, 3), range(0, 5, -1)
 */

/**
 * 5. reduce()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice' AND b.name = 'Bob' AND c.name = 'Daniel'
 * RETURN reduce(totalAge = 0, n IN nodes(p) | totalAge + n.age) AS reduction
 */

/**
 * 6. relationships()
 *
 * MATCH p = (a)-->(b)-->(c)
 * WHERE a.name = 'Alice' AND c.name = 'Eskil'
 * RETURN relationships(p)
 */

/**
 * 7. reverse()
 *
 * WITH [4923,'abc',521, null, 487] AS ids
 * RETURN reverse(ids)
 */

/**
 * 8. tail()
 *
 * MATCH (a) WHERE a.name = 'Eskil'
 * RETURN a.array, tail(a.array)
 */

/**
 * 9. toBooleanList()
 *
 * RETURN toBooleanList(null) as noList,
 * toBooleanList([null, null]) as nullsInList,
 * toBooleanList(['a string', true, 'false', null, ['A','B']]) as mixedList
 */

/**
 * 10. toFloatList()
 *
 * RETURN toFloatList(null) as noList,
 * toFloatList([null, null]) as nullsInList,
 * toFloatList(['a string', 2.5, '3.14159', null, ['A','B']]) as mixedList
 */

/**
 * 11. toIntegerList()
 *
 * RETURN toIntegerList(null) as noList,
 * toIntegerList([null, null]) as nullsInList,
 * toIntegerList(['a string', 2, '5', null, ['A','B']]) as mixedList
 */

/**
 * 12. toStringList()
 *
 * RETURN toStringList(null) as noList,
 * toStringList([null, null]) as nullsInList,
 * toStringList([
 *   'already a string',
 *   2,
 *   date({year:1955, month:11, day:5}),
 *   null,
 *   ['A','B']
 * ]) as mixedList
 */