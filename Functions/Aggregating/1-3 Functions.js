/**
 * 1. avg() - Numeric values
 *
 * MATCH (n:Person)
 * RETURN avg(n.age)
 */

/**
 * 2. avg() - Durations
 *
 * UNWIND [duration('P2DT3H'), duration('PT1H45S')] AS dur
 * RETURN avg(dur)
 */

/**
 * 3. collect()
 *
 * MATCH (n:Person)
 * RETURN collect(n.age)
 */