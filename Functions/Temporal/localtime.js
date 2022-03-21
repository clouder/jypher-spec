/**
 * 5.1. Getting the current LocalTime
 *
 * RETURN localtime() AS now
 *
 * RETURN localtime({timezone: 'America/Los Angeles'}) AS nowInLA
 */

/**
 * 5.1.1. localtime.transaction()
 *
 * RETURN localtime.transaction() AS now
 */

/**
 * 5.1.2. localtime.statement()
 *
 * RETURN localtime.statement() AS now
 *
 * RETURN localtime.statement('America/Los Angeles') AS nowInLA
 */

/**
 * 5.1.3. localtime.realtime()
 *
 * RETURN localtime.realtime() AS now
 */

/**
 * 5.2. Creating a LocalTime
 *
 * UNWIND [
 *   localtime({hour:12, minute:31, second:14, nanosecond: 789, millisecond: 123, microsecond: 456}),
 *   localtime({hour:12, minute:31, second:14}),
 *   localtime({hour:12})
 * ] as theTime
 * RETURN theTime
 */

/**
 * 5.3. Creating a LocalTime from a string
 *
 * UNWIND [
 *   localtime('21:40:32.142'),
 *   localtime('214032.142'),
 *   localtime('21:40'),
 *   localtime('21')
 * ] AS theTime
 * RETURN theTime
 */

/**
 * 5.4. Creating a LocalTime using other temporal values as components
 *
 * WITH time({hour:12, minute:31, second:14, microsecond: 645876, timezone: '+01:00'}) AS tt
 * RETURN
 *   localtime({time:tt}) AS timeOnly,
 *   localtime({time:tt, second: 42}) AS timeSS
 */

/**
 * 5.5. Truncating a LocalTime
 *
 * WITH time({hour:12, minute:31, second:14, nanosecond: 645876123, timezone: '-01:00'}) AS t
 * RETURN
 *   localtime.truncate('day', t) AS truncDay,
 *   localtime.truncate('hour', t) AS truncHour,
 *   localtime.truncate('minute', t, {millisecond:2}) AS truncMinute,
 *   localtime.truncate('second', t) AS truncSecond,
 *   localtime.truncate('millisecond', t) AS truncMillisecond,
 *   localtime.truncate('microsecond', t) AS truncMicrosecond
 */