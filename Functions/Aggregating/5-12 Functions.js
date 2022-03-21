/**
 * 5. max()
 *
 * UNWIND [1, 'a', null, 0.2, 'b', '1', '99'] AS val
 * RETURN max(val)
 *
 * UNWIND [[1, 'a', 89], [1, 2]] AS val
 * RETURN max(val)
 *
 * MATCH (n:Person)
 * RETURN max(n.age)
 */

/**
 * 6. min()
 *
 * UNWIND [1, 'a', null, 0.2, 'b', '1', '99'] AS val
 * RETURN min(val)
 *
 * UNWIND ['d', [1, 2], ['a', 'c', 23]] AS val
 * RETURN min(val)
 *
 * MATCH (n:Person)
 * RETURN min(n.age)
 */

/**
 * 7. percentileCont()
 *
 * MATCH (n:Person)
 * RETURN percentileCont(n.age, 0.4)
 */

/**
 * 8. percentileDisc()
 *
 * MATCH (n:Person)
 * RETURN percentileDisc(n.age, 0.5)
 */

/**
 * 9. stDev()
 *
 * MATCH (n)
 * WHERE n.name IN ['A', 'B', 'C']
 * RETURN stDev(n.age)
 */

/**
 * 10. stDevP()
 *
 * MATCH (n)
 * WHERE n.name IN ['A', 'B', 'C']
 * RETURN stDevP(n.age)
 */

/**
 * 11. sum() - Numeric values
 *
 * MATCH (n:Person)
 * RETURN sum(n.age)
 */

/**
 * UNWIND [duration('P2DT3H'), duration('PT1H45S')] AS dur
 * RETURN sum(dur)
 */