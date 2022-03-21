/**
 * 3.1. Getting the current DateTime
 *
 * RETURN datetime() AS currentDateTime
 *
 * RETURN datetime({timezone: 'America/Los Angeles'}) AS currentDateTimeInLA
 */

/**
 * 3.1.1. datetime.transaction()
 *
 * RETURN datetime.transaction() AS currentDateTime
 *
 * RETURN datetime.transaction('America/Los Angeles') AS currentDateTimeInLA
 */

/**
 * 3.1.2. datetime.statement()
 *
 * RETURN datetime.statement() AS currentDateTime
 */

/**
 * 3.1.3. datetime.realtime()
 *
 * RETURN datetime.realtime() AS currentDateTime
 */

/**
 * 3.2. Creating a calendar (Year-Month-Day) DateTime
 *
 * UNWIND [
 *   datetime({year:1984, month:10, day:11, hour:12, minute:31, second:14, millisecond: 123, microsecond: 456, nanosecond: 789}),
 *   datetime({year:1984, month:10, day:11, hour:12, minute:31, second:14, millisecond: 645, timezone: '+01:00'}),
 *   datetime({year:1984, month:10, day:11, hour:12, minute:31, second:14, nanosecond: 645876123, timezone: 'Europe/Stockholm'}),
 *   datetime({year:1984, month:10, day:11, hour:12, minute:31, second:14, timezone: '+01:00'}),
 *   datetime({year:1984, month:10, day:11, hour:12, minute:31, second:14}),
 *   datetime({year:1984, month:10, day:11, hour:12, minute:31, timezone: 'Europe/Stockholm'}),
 *   datetime({year:1984, month:10, day:11, hour:12, timezone: '+01:00'}),
 *   datetime({year:1984, month:10, day:11, timezone: 'Europe/Stockholm'})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 3.3. Creating a week (Year-Week-Day) DateTime
 *
 * UNWIND [
 *   datetime({year:1984, week:10, dayOfWeek:3, hour:12, minute:31, second:14, millisecond: 645}),
 *   datetime({year:1984, week:10, dayOfWeek:3, hour:12, minute:31, second:14, microsecond: 645876, timezone: '+01:00'}),
 *   datetime({year:1984, week:10, dayOfWeek:3, hour:12, minute:31, second:14, nanosecond: 645876123, timezone: 'Europe/Stockholm'}),
 *   datetime({year:1984, week:10, dayOfWeek:3, hour:12, minute:31, second:14, timezone: 'Europe/Stockholm'}),
 *   datetime({year:1984, week:10, dayOfWeek:3, hour:12, minute:31, second:14}),
 *   datetime({year:1984, week:10, dayOfWeek:3, hour:12, timezone: '+01:00'}),
 *   datetime({year:1984, week:10, dayOfWeek:3, timezone: 'Europe/Stockholm'})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 3.4. Creating a quarter (Year-Quarter-Day) DateTime
 *
 * UNWIND [
 *   datetime({year:1984, quarter:3, dayOfQuarter: 45, hour:12, minute:31, second:14, microsecond: 645876}),
 *   datetime({year:1984, quarter:3, dayOfQuarter: 45, hour:12, minute:31, second:14, timezone: '+01:00'}),
 *   datetime({year:1984, quarter:3, dayOfQuarter: 45, hour:12, timezone: 'Europe/Stockholm'}),
 *   datetime({year:1984, quarter:3, dayOfQuarter: 45})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 3.5. Creating an ordinal (Year-Day) DateTime
 *
 * UNWIND [
 *   datetime({year:1984, ordinalDay:202, hour:12, minute:31, second:14, millisecond: 645}),
 *   datetime({year:1984, ordinalDay:202, hour:12, minute:31, second:14, timezone: '+01:00'}),
 *   datetime({year:1984, ordinalDay:202, timezone: 'Europe/Stockholm'}),
 *   datetime({year:1984, ordinalDay:202})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 3.6. Creating a DateTime from a string
 *
 * UNWIND [
 *   datetime('2015-07-21T21:40:32.142+0100'),
 *   datetime('2015-W30-2T214032.142Z'),
 *   datetime('2015T214032-0100'),
 *   datetime('20150721T21:40-01:30'),
 *   datetime('2015-W30T2140-02'),
 *   datetime('2015202T21+18:00'),
 *   datetime('2015-07-21T21:40:32.142[Europe/London]'),
 *   datetime('2015-07-21T21:40:32.142-04[America/New_York]')
 * ] AS theDate
 * RETURN theDate
 */

/**
 * 3.7. Creating a DateTime using other temporal values as components
 *
 * WITH date({year:1984, month:10, day:11}) AS dd
 * RETURN
 *   datetime({date:dd, hour: 10, minute: 10, second: 10}) AS dateHHMMSS,
 *   datetime({date:dd, hour: 10, minute: 10, second: 10, timezone:'+05:00'}) AS dateHHMMSSTimezone,
 *   datetime({date:dd, day: 28, hour: 10, minute: 10, second: 10}) AS dateDDHHMMSS,
 *   datetime({date:dd, day: 28, hour: 10, minute: 10, second: 10, timezone:'Pacific/Honolulu'}) AS dateDDHHMMSSTimezone
 *
 * WITH time({hour:12, minute:31, second:14, microsecond: 645876, timezone: '+01:00'}) AS tt
 * RETURN
 *   datetime({year:1984, month:10, day:11, time:tt}) AS YYYYMMDDTime,
 *   datetime({year:1984, month:10, day:11, time:tt, timezone:'+05:00'}) AS YYYYMMDDTimeTimezone,
 *   datetime({year:1984, month:10, day:11, time:tt, second: 42}) AS YYYYMMDDTimeSS,
 *   datetime({year:1984, month:10, day:11, time:tt, second: 42, timezone:'Pacific/Honolulu'}) AS YYYYMMDDTimeSSTimezone
 *
 * WITH
 *   date({year:1984, month:10, day:11}) AS dd,
 *   localtime({hour:12, minute:31, second:14, millisecond: 645}) AS tt
 * RETURN
 *   datetime({date:dd, time:tt}) as dateTime,
 *   datetime({date:dd, time:tt, timezone:'+05:00'}) AS dateTimeTimezone,
 *   datetime({date:dd, time:tt, day: 28, second: 42}) AS dateTimeDDSS,
 *   datetime({date:dd, time:tt, day: 28, second: 42, timezone:'Pacific/Honolulu'}) AS dateTimeDDSSTimezone
 *
 * WITH datetime({year:1984, month:10, day:11, hour:12, timezone: 'Europe/Stockholm'}) AS dd
 * RETURN
 *   datetime({datetime:dd}) AS dateTime,
 *   datetime({datetime:dd, timezone:'+05:00'}) AS dateTimeTimezone,
 *   datetime({datetime:dd, day: 28, second: 42}) AS dateTimeDDSS,
 *   datetime({datetime:dd, day: 28, second: 42, timezone:'Pacific/Honolulu'}) AS dateTimeDDSSTimezone
 */

/**
 * 3.8. Creating a DateTime from a timestamp
 *
 * RETURN datetime({epochSeconds:timestamp() / 1000, nanosecond: 23}) AS theDate
 *
 * RETURN datetime({epochMillis: 424797300000}) AS theDate
 */

/**
 * 3.9. Truncating a DateTime
 *
 * WITH datetime({year:2017, month:11, day:11, hour:12, minute:31, second:14, nanosecond: 645876123, timezone: '+03:00'}) AS d
 * RETURN datetime.truncate('millennium', d, {timezone:'Europe/Stockholm'}) AS truncMillenium,
 *   datetime.truncate('year', d, {day:5}) AS truncYear,
 *   datetime.truncate('month', d) AS truncMonth,
 *   datetime.truncate('day', d, {millisecond:2}) AS truncDay,
 *   datetime.truncate('hour', d) AS truncHour,
 *   datetime.truncate('second', d) AS truncSecond
 */