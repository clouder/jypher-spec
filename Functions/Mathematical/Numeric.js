/**
 * 1. abs()
 *
 * MATCH (a), (e) WHERE a.name = 'Alice' AND e.name = 'Eskil'
 * RETURN a.age, e.age, abs(a.age - e.age)
 */

/**
 * 2. ceil()
 *
 * RETURN ceil(0.1)
 */

/**
 * 3. floor()
 *
 * RETURN floor(0.9)
 */

/**
 * 4. rand()
 *
 * RETURN rand()
 */

/**
 * 5. round()
 *
 * RETURN round(3.141592)
 */

/**
 * 6. round(), with precision
 *
 * RETURN round(3.141592, 3)
 */

/**
 * 7. round(), with precision and rounding mode
 *
 * RETURN round(3.141592, 2, 'CEILING')
 */

/**
 * 8. sign()
 *
 * RETURN sign(-17), sign(0.1)
 */