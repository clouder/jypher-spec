/**
 * 2.1. Getting the current Date
 *
 * RETURN date() AS currentDate
 */

/**
 * 2.1.1. date.transaction()
 *
 * RETURN date.transaction() AS currentDate
 */

/**
 * 2.1.2. date.statement()
 *
 * RETURN date.statement() AS currentDate
 */

/**
 * 2.1.3. date.realtime()
 *
 * RETURN date.realtime() AS currentDate
 */

/**
 * 2.2. Creating a calendar (Year-Month-Day) Date
 *
 * UNWIND [
 *   date({year:1984, month:10, day:11}),
 *   date({year:1984, month:10}),
 *   date({year:1984})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 2.3. Creating a week (Year-Week-Day) Date
 *
 * UNWIND [
 *   date({year:1984, week:10, dayOfWeek:3}),
 *   date({year:1984, week:10}),
 *   date({year:1984})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 2.4. Creating a quarter (Year-Quarter-Day) Date
 *
 * UNWIND [
 *   date({year:1984, quarter:3, dayOfQuarter: 45}),
 *   date({year:1984, quarter:3}),
 *   date({year:1984})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 2.5. Creating an ordinal (Year-Day) Date
 *
 * UNWIND [
 *   date({year:1984, ordinalDay:202}),
 *   date({year:1984})
 * ] as theDate
 * RETURN theDate
 */

/**
 * 2.6. Creating a Date from a string
 *
 * UNWIND [
 *   date('2015-07-21'),
 *   date('2015-07'),
 *   date('201507'),
 *   date('2015-W30-2'),
 *   date('2015202'),
 *   date('2015')
 * ] as theDate
 * RETURN theDate
 */

/**
 * 2.7. Creating a Date using other temporal values as components
 *
 * UNWIND [
 *   date({year:1984, month:11, day:11}),
 *   localdatetime({year:1984, month:11, day:11, hour:12, minute:31, second:14}),
 *   datetime({year:1984, month:11, day:11, hour:12, timezone: '+01:00'})
 * ] as dd
 * RETURN date({date: dd}) AS dateOnly,
 *   date({date: dd, day: 28}) AS dateDay
 */

/**
 * 2.8. Truncating a Date
 *
 * WITH datetime({year:2017, month:11, day:11, hour:12, minute:31, second:14, nanosecond: 645876123, timezone: '+01:00'}) AS d
 * RETURN date.truncate('millennium', d) AS truncMillenium,
 *   date.truncate('century', d) AS truncCentury,
 *   date.truncate('decade', d) AS truncDecade,
 *   date.truncate('year', d, {day:5}) AS truncYear,
 *   date.truncate('weekYear', d) AS truncWeekYear,
 *   date.truncate('quarter', d) AS truncQuarter,
 *   date.truncate('month', d) AS truncMonth,
 *   date.truncate('week', d, {dayOfWeek:2}) AS truncWeek,
 *   date.truncate('day', d) AS truncDay
 */