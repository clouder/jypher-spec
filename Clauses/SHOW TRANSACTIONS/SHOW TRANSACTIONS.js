/**
 * 1.2. Listing all transactions
 *
 * SHOW TRANSACTIONS
 */

/**
 * 1.3. Listing transactions with filtering on output columns
 *
 * SHOW TRANSACTIONS YIELD database, currentQuery WHERE currentQuery contains 'Mark'
 *
 * SHOW TRANSACTIONS YIELD transactionId, elapsedTime, cpuTime, waitTime, idleTime
 * RETURN transactionId AS txId,
 *   elapsedTime.milliseconds AS elapsedTimeMillis,
 *   cpuTime.milliseconds AS cpuTimeMillis,
 *   waitTime.milliseconds AS waitTimeMillis,
 *   idleTime.seconds AS idleTimeSeconds
 */

/**
 * 1.4. Listing specific transactions
 *
 * SHOW TRANSACTIONS "neo4j-transaction-3"
 */

/**
 * 2.2. Terminate Transactions
 *
 * TERMINATE TRANSACTIONS "neo4j-transaction-1","neo4j-transaction-2"
 */