/**
 * 1.2. Listing all transactions
 *
 * SHOW TRANSACTIONS
 */
[{ clause: { name: "SHOW TRANSACTIONS" } }]

/**
 * 1.3. Listing transactions with filtering on output columns
 *
 * SHOW TRANSACTIONS YIELD database, currentQuery WHERE currentQuery contains 'Mark'
 */
 [
    { clause: {
        name: "SHOW TRANSACTIONS"
        ,yield: { expressions: ["database" ,"currentQuery"] }
    } }
    ,{ clause: {
        name: "WHERE"
        ,expression: { operator: {
            name: "CONTAINS"
            ,expressions: ["currentQuery" ,{ literal: "Mark" }]
        } }
    } }
]

/**
 * SHOW TRANSACTIONS YIELD transactionId, elapsedTime, cpuTime, waitTime, idleTime
 * RETURN transactionId AS txId,
 *   elapsedTime.milliseconds AS elapsedTimeMillis,
 *   cpuTime.milliseconds AS cpuTimeMillis,
 *   waitTime.milliseconds AS waitTimeMillis,
 *   idleTime.seconds AS idleTimeSeconds
 */
 [
    { clause: {
        name: "SHOW TRANSACTIONS"
        ,yield: { expressions: [
            "transactionId"
            ,"elapsedTime"
            ,"cpuTime"
            ,"waitTime"
            ,"idleTime"
        ] }
    } }
    ,{ clause: {
        name: "RETURN"
        ,expressions: [
            { operator: { name: "AS" ,expressions: ["transactionId" ,"txId"] } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { operator: {
                        name: "."
                        ,expressions: ["elapsedTime" ,"milliseconds"]
                    } }
                    ,"elapsedTimeMillis"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { operator: {
                        name: "."
                        ,expressions: ["cpuTime" ,"milliseconds"]
                    } }
                    ,"cpuTimeMillis"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { operator: {
                        name: "."
                        ,expressions: ["waitTime" ,"milliseconds"]
                    } }
                    ,"waitTimeMillis"
                ]
            } }
            ,{ operator: {
                name: "AS"
                ,expressions: [
                    { operator: {
                        name: "."
                        ,expressions: ["idleTime" ,"seconds"]
                    } }
                    ,"idleTimeSeconds"
                ]
            } }
        ]
    } }
]

/**
 * 1.4. Listing specific transactions
 *
 * SHOW TRANSACTIONS "neo4j-transaction-3"
 */
 [
    { clause: {
        name: "SHOW TRANSACTIONS"
        ,expression: { literal: "neo4j-transaction-3" }
    } }
]

/**
 * 2.2. Terminate Transactions
 *
 * TERMINATE TRANSACTIONS "neo4j-transaction-1","neo4j-transaction-2"
 */
 [
    { clause: {
        name: "SHOW TRANSACTIONS"
        ,expressions: [
            { literal: "neo4j-transaction-1" }
            ,{ literal: "neo4j-transaction-2" }
        ]
    } }
]