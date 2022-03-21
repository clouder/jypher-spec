/**
 * 1. acos()
 *
 * RETURN acos(0.5)
 */

/**
 * 2. asin()
 *
 * RETURN asin(0.5)
 */

/**
 * 3. atan()
 *
 * RETURN atan(0.5)
 */

/**
 * 4. atan2()
 *
 * RETURN atan2(0.5, 0.6)
 */

/**
 * 5. cos()
 *
 * RETURN cos(0.5)
 */

/**
 * 6. cot()
 *
 * RETURN cot(0.5)
 */

/**
 * 7. degrees()
 *
 * RETURN degrees(3.14159)
 */

/**
 * 8. haversin()
 *
 * RETURN haversin(0.5)
 */

/**
 * 9. Spherical distance using the haversin() function
 *
 * CREATE (ber:City {lat: 52.5, lon: 13.4}), (sm:City {lat: 37.5, lon: -122.3})
 * RETURN 2 * 6371 * asin(sqrt(haversin(radians( sm.lat - ber.lat ))
 *   + cos(radians( sm.lat )) * cos(radians( ber.lat )) *
 *   haversin(radians( sm.lon - ber.lon )))) AS dist
 */

/**
 * 10. pi()
 *
 * RETURN pi()
 */

/**
 * 11. radians()
 *
 * RETURN radians(180)
 */

/**
 * 12. sin()
 *
 * RETURN sin(0.5)
 */

/**
 * 13. tan()
 *
 * RETURN tan(0.5)
 */