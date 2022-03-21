/**
 * 4.1. Getting the current LocalDateTime
 *
 * RETURN localdatetime() AS now
 *
 * RETURN localdatetime({timezone: 'America/Los Angeles'}) AS now
 */

/**
 * 4.1.1. localdatetime.transaction()
 *
 * RETURN localdatetime.transaction() AS now
 */

/**
 * 4.1.2. localdatetime.statement()
 *
 * RETURN localdatetime.statement() AS now
 */

/**
 * 4.1.3. localdatetime.realtime()
 *
 * RETURN localdatetime.realtime() AS now
 *
 * RETURN localdatetime.realtime('America/Los Angeles') AS nowInLA
 */

/**
 * 4.2. Creating a calendar (Year-Month-Day) LocalDateTime
 *
 * RETURN localdatetime({year:1984, month:10, day:11, hour:12, minute:31, second:14, millisecond: 123, microsecond: 456, nanosecond: 789}) AS theDate
 */

/**
 * 4.3. Creating a week (Year-Week-Day) LocalDateTime
 *
 * RETURN localdatetime({year:1984, week:10, dayOfWeek:3, hour:12, minute:31, second:14, millisecond: 645}) AS theDate
 */

/**
 * 4.4. Creating a quarter (Year-Quarter-Day) DateTime
 *
 * RETURN localdatetime({year:1984, quarter:3, dayOfQuarter: 45, hour:12, minute:31, second:14, nanosecond: 645876123}) AS theDate
 */

/**
 * 4.5. Creating an ordinal (Year-Day) LocalDateTime
 *
 * RETURN localdatetime({year:1984, ordinalDay:202, hour:12, minute:31, second:14, microsecond: 645876}) AS theDate
 */

/**
 * 4.6. Creating a LocalDateTime from a string
 *
 * UNWIND [
 *   localdatetime('2015-07-21T21:40:32.142'),
 *   localdatetime('2015-W30-2T214032.142'),
 *   localdatetime('2015-202T21:40:32'),
 *   localdatetime('2015202T21')
 * ] AS theDate
 * RETURN theDate
 */

/**
 * 4.7. Creating a LocalDateTime using other temporal values as components
 *
 * WITH date({year:1984, month:10, day:11}) AS dd
 * RETURN
 *   localdatetime({date:dd, hour: 10, minute: 10, second: 10}) AS dateHHMMSS,
 *   localdatetime({date:dd, day: 28, hour: 10, minute: 10, second: 10}) AS dateDDHHMMSS
 *
 * WITH time({hour:12, minute:31, second:14, microsecond: 645876, timezone: '+01:00'}) AS tt
 * RETURN
 *   localdatetime({year:1984, month:10, day:11, time:tt}) AS YYYYMMDDTime,
 *   localdatetime({year:1984, month:10, day:11, time:tt, second: 42}) AS YYYYMMDDTimeSS
 *
 * WITH
 *   date({year:1984, month:10, day:11}) AS dd,
 *   time({hour:12, minute:31, second:14, microsecond: 645876, timezone: '+01:00'}) AS tt
 * RETURN
 *   localdatetime({date:dd, time:tt}) AS dateTime,
 *   localdatetime({date:dd, time:tt, day: 28, second: 42}) AS dateTimeDDSS
 *
 * WITH datetime({year:1984, month:10, day:11, hour:12, timezone: '+01:00'}) as dd
 * RETURN
 *   localdatetime({datetime:dd}) as dateTime,
 *   localdatetime({datetime:dd, day: 28, second: 42}) as dateTimeDDSS
 */

/**
 * 4.8. Truncating a LocalDateTime
 *
 * WITH localdatetime({year:2017, month:11, day:11, hour:12, minute:31, second:14, nanosecond: 645876123}) AS d
 * RETURN
 *   localdatetime.truncate('millennium', d) AS truncMillenium,
 *   localdatetime.truncate('year', d, {day:2}) AS truncYear,
 *   localdatetime.truncate('month', d) AS truncMonth,
 *   localdatetime.truncate('day', d) AS truncDay,
 *   localdatetime.truncate('hour', d, {nanosecond:2}) AS truncHour,
 *   localdatetime.truncate('second', d) AS truncSecond
 */
