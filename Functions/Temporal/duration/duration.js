/**
 * 1. Creating a Duration from duration components
 *
 * UNWIND [
 *   duration({days: 14, hours:16, minutes: 12}),
 *   duration({months: 5, days: 1.5}),
 *   duration({months: 0.75}),
 *   duration({weeks: 2.5}),
 *   duration({minutes: 1.5, seconds: 1, milliseconds: 123, microseconds: 456, nanoseconds: 789}),
 *   duration({minutes: 1.5, seconds: 1, nanoseconds: 123456789})
 * ] AS aDuration
 * RETURN aDuration
 */

/**
 * 2. Creating a Duration from a string
 *
 * UNWIND [
 *   duration("P14DT16H12M"),
 *   duration("P5M1.5D"),
 *   duration("P0.75M"),
 *   duration("PT0.75M"),
 *   duration("P2012-02-02T14:37:21.545")
 * ] AS aDuration
 * RETURN aDuration
 */

/**
 * 3. Computing the Duration between two temporal instants
 *
 * 3.1. duration.between()
 *
 * UNWIND [
 *   duration.between(date("1984-10-11"), date("1985-11-25")),
 *   duration.between(date("1985-11-25"), date("1984-10-11")),
 *   duration.between(date("1984-10-11"), datetime("1984-10-12T21:40:32.142+0100")),
 *   duration.between(date("2015-06-24"), localtime("14:30")),
 *   duration.between(localtime("14:30"), time("16:30+0100")),
 *   duration.between(localdatetime("2015-07-21T21:40:32.142"), localdatetime("2016-07-21T21:45:22.142")),
 *   duration.between(datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/Stockholm'}), datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/London'}))
 * ] AS aDuration
 * RETURN aDuration
 */

/**
 * 3.2. duration.inMonths()
 *
 * UNWIND [
 *   duration.inMonths(date("1984-10-11"), date("1985-11-25")),
 *   duration.inMonths(date("1985-11-25"), date("1984-10-11")),
 *   duration.inMonths(date("1984-10-11"), datetime("1984-10-12T21:40:32.142+0100")),
 *   duration.inMonths(date("2015-06-24"), localtime("14:30")),
 *   duration.inMonths(localdatetime("2015-07-21T21:40:32.142"), localdatetime("2016-07-21T21:45:22.142")),
 *   duration.inMonths(datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/Stockholm'}), datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/London'}))
 * ] AS aDuration
 * RETURN aDuration
 */

/**
 * 3.3. duration.inDays()
 *
 * UNWIND [
 *   duration.inDays(date("1984-10-11"), date("1985-11-25")),
 *   duration.inDays(date("1985-11-25"), date("1984-10-11")),
 *   duration.inDays(date("1984-10-11"), datetime("1984-10-12T21:40:32.142+0100")),
 *   duration.inDays(date("2015-06-24"), localtime("14:30")),
 *   duration.inDays(localdatetime("2015-07-21T21:40:32.142"), localdatetime("2016-07-21T21:45:22.142")),
 *   duration.inDays(datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/Stockholm'}), datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/London'}))
 * ] AS aDuration
 * RETURN aDuration
 */

/**
 * 3.4. duration.inSeconds()
 *
 * UNWIND [
 *   duration.inSeconds(date("1984-10-11"), date("1984-10-12")),
 *   duration.inSeconds(date("1984-10-12"), date("1984-10-11")),
 *   duration.inSeconds(date("1984-10-11"), datetime("1984-10-12T01:00:32.142+0100")),
 *   duration.inSeconds(date("2015-06-24"), localtime("14:30")),
 *   duration.inSeconds(datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/Stockholm'}), datetime({year: 2017, month: 10, day: 29, hour: 0, timezone: 'Europe/London'}))
 * ] AS aDuration
 * RETURN aDuration
 */