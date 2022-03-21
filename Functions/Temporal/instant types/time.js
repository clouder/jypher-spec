/**
 * 6.1. Getting the current Time
 *
 * RETURN time() AS currentTime
 *
 * RETURN time({timezone: 'America/Los Angeles'}) AS currentTimeInLA
 */

/**
 * 6.1.1. time.transaction()
 *
 * RETURN time.transaction() AS currentTime
 */

/**
 * 6.1.2. time.statement()
 *
 * RETURN time.statement() AS currentTime
 *
 * RETURN time.statement('America/Los Angeles') AS currentTimeInLA
 */

/**
 * 6.1.3. time.realtime()
 *
 * RETURN time.realtime() AS currentTime
 */

/**
 * 6.2. Creating a Time
 *
 * UNWIND [
 *   time({hour:12, minute:31, second:14, millisecond: 123, microsecond: 456, nanosecond: 789}),
 *   time({hour:12, minute:31, second:14, nanosecond: 645876123}),
 *   time({hour:12, minute:31, second:14, microsecond: 645876, timezone: '+01:00'}),
 *   time({hour:12, minute:31, timezone: '+01:00'}),
 *   time({hour:12, timezone: '+01:00'})
 * ] AS theTime
 * RETURN theTime
 */

/**
 * 6.3. Creating a Time from a string
 *
 * UNWIND [
 *   time('21:40:32.142+0100'),
 *   time('214032.142Z'),
 *   time('21:40:32+01:00'),
 *   time('214032-0100'),
 *   time('21:40-01:30'),
 *   time('2140-00:00'),
 *   time('2140-02'),
 *   time('22+18:00')
 * ] AS theTime
 * RETURN theTime
 */

/**
 * 6.4. Creating a Time using other temporal values as components
 *
 * WITH localtime({hour:12, minute:31, second:14, microsecond: 645876}) AS tt
 * RETURN
 *   time({time:tt}) AS timeOnly,
 *   time({time:tt, timezone:'+05:00'}) AS timeTimezone,
 *   time({time:tt, second: 42}) AS timeSS,
 *   time({time:tt, second: 42, timezone:'+05:00'}) AS timeSSTimezone
 */

/**
 * 6.5. Truncating a Time
 *
 * WITH time({hour:12, minute:31, second:14, nanosecond: 645876123, timezone: '-01:00'}) AS t
 * RETURN
 *   time.truncate('day', t) AS truncDay,
 *   time.truncate('hour', t) AS truncHour,
 *   time.truncate('minute', t) AS truncMinute,
 *   time.truncate('second', t) AS truncSecond,
 *   time.truncate('millisecond', t, {nanosecond:2}) AS truncMillisecond,
 *   time.truncate('microsecond', t) AS truncMicrosecond
 */