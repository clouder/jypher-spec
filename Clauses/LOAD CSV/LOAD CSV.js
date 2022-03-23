/**
 * 3. Import data from a CSV file
 *
 * LOAD CSV FROM 'file:///artists.csv' AS line
 * CREATE (:Artist {name: line[1], year: toInteger(line[2])})
 */
[
    { clause: {
        name: "LOAD CSV"
        ,from: { literal: "file:///artists.csv"}
        ,as: { expression: "line" }
    } }
    ,{ clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: {
                label: "Artist"
                ,properties: {
                    name: { operator: {
                        name: "[]"
                        ,expressions: ["line" ,{ literal: 1 }]
                    } }
                    ,year: { function: {
                        name: "toInteger"
                        ,argument: { operator: {
                            name: "[]"
                            ,expressions: ["line" ,{ literal: 2}]
                        } }
                    } }
                }
            } }
        ] }
    } }
]

/**
 * 4. Import data from a remote CSV file
 *
 * LOAD CSV FROM 'http://data.neo4j.com/bands/artists.csv' AS line
 * CREATE (:Artist {name: line[1], year: toInteger(line[2])})
 */
[
    { clause: {
        name: "LOAD CSV"
        ,from: { literal: "http://data.neo4j.com/bands/artists.csv" }
        ,as: { expression: "line" }
    } }
    ,{ clause: {
        name: "CREATE"
        ,expression: { pattern: [
            { node: {
                label: "Artist"
                ,properties: {
                    name: { operator: {
                        name: "[]"
                        ,expressions: ["line" ,{ literal: 1 }]
                    } }
                    ,year: { operator: {
                        name: "[]"
                        ,expressions: { function: {
                            name: "toInteger"
                            ,argumnet: { operator: {
                                name: "[]"
                                ,expressions: ["line" ,{ literal: 2 }]
                            } }
                        } }
                    } }
                }
            } }
        ] }
    } }
]

/**
 * 5. Import data from a CSV file containing headers
 *
 * LOAD CSV WITH HEADERS FROM 'file:///artists-with-headers.csv' AS line
 * CREATE (:Artist {name: line.Name, year: toInteger(line.Year)})
 */

/**
 * 6. Import data from a CSV file with a custom field delimiter
 *
 * LOAD CSV FROM 'file:///artists-fieldterminator.csv' AS line FIELDTERMINATOR ';'
 * CREATE (:Artist {name: line[1], year: toInteger(line[2])})
 */

/**
 * 7. Importing large amounts of data
 *
 * USING PERIODIC COMMIT LOAD CSV FROM 'file:///artists.csv' AS line
 * CREATE (:Artist {name: line[1], year: toInteger(line[2])})
 */

/**
 * 8. Setting the rate of periodic commits
 *
 * USING PERIODIC COMMIT 500 LOAD CSV FROM 'file:///artists.csv' AS line
 * CREATE (:Artist {name: line[1], year: toInteger(line[2])})
 */

/**
 * 9. Import data containing escaped characters
 *
 * LOAD CSV FROM 'file:///artists-with-escaped-char.csv' AS line
 * CREATE (a:Artist {name: line[1], year: toInteger(line[2])})
 * RETURN
 *   a.name AS name,
 *   a.year AS year,
 *   size(a.name) AS size
 */

/**
 * 10. Using linenumber() with LOAD CSV
 *
 * LOAD CSV FROM 'file:///artists.csv' AS line
 * RETURN linenumber() AS number, line
 */

/**
 * 11. Using file() with LOAD CSV
 *
 * LOAD CSV FROM 'file:///artists.csv' AS line
 * RETURN DISTINCT file() AS path
 */