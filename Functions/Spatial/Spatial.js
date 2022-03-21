/**
 * 1. point.distance()
 *
 * WITH
 *   point({x: 2.3, y: 4.5, crs: 'cartesian'}) AS p1,
 *   point({x: 1.1, y: 5.4, crs: 'cartesian'}) AS p2
 * RETURN point.distance(p1,p2) AS dist
 *
 * WITH
 *   point({longitude: 12.78, latitude: 56.7, height: 100}) as p1,
 *   point({latitude: 56.71, longitude: 12.79, height: 100}) as p2
 * RETURN point.distance(p1,p2) as dist
 *
 * MATCH (t:TrainStation)-[:TRAVEL_ROUTE]->(o:Office)
 * WITH
 *   point({longitude: t.longitude, latitude: t.latitude}) AS trainPoint,
 *   point({longitude: o.longitude, latitude: o.latitude}) AS officePoint
 * RETURN round(point.distance(trainPoint, officePoint)) AS travelDistance
 *
 * RETURN point.distance(null, point({longitude: 56.7, latitude: 12.78})) AS d
 */

/**
 * 2. point.withinBBox()
 *
 * WITH
 *   point({x: 0, y: 0, crs: 'cartesian'}) AS lowerLeft,
 *   point({x: 10, y: 10, crs: 'cartesian'}) AS upperRight
 * RETURN point.withinBBox(point({x: 5, y: 5, crs: 'cartesian'}), lowerLeft, upperRight) AS result
 *
 * WITH
 *   point({longitude: 12.53, latitude: 55.66}) AS lowerLeft,
 *   point({longitude: 12.614, latitude: 55.70}) AS upperRight
 * MATCH (t:TrainStation)
 * WHERE point.withinBBox(point({longitude: t.longitude, latitude: t.latitude}), lowerLeft, upperRight)
 * RETURN count(t)
 *
 * WITH
 *   point({longitude: 179, latitude: 55.66}) AS lowerLeft,
 *   point({longitude: -179, latitude: 55.70}) AS upperRight
 * RETURN point.withinBBox(point({longitude: 180, latitude: 55.66}), lowerLeft, upperRight) AS result
 *
 * RETURN point.withinBBox(null, point({longitude: 56.7, latitude: 12.78}), point({longitude: 57.0, latitude: 13.0})) AS in
 */

/**
 * 3. point() - WGS 84 2D
 *
 * RETURN point({longitude: 56.7, latitude: 12.78}) AS point
 *
 * RETURN point({x: 2.3, y: 4.5, crs: 'WGS-84'}) AS point
 *
 * MATCH (p:Office)
 * RETURN point({longitude: p.longitude, latitude: p.latitude}) AS officePoint
 *
 * RETURN point(null) AS p
 */

/**
 * 4. point() - WGS 84 3D
 *
 * RETURN point({longitude: 56.7, latitude: 12.78, height: 8}) AS point
 */

/**
 * 5. point() - Cartesian 2D
 *
 * RETURN point({x: 2.3, y: 4.5}) AS point
 */

/**
 * 6. point() - Cartesian 3D
 *
 * RETURN point({x: 2.3, y: 4.5, z: 2}) AS point
 */