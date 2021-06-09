// Russian [ru]

const monthFormat = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
const monthStandalone = 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_')

const monthShortFormat = 'янв_фев_мар_апр_мая_июн_июл_авг_сен_окт_ноя_дек'.split('_')
const monthShortStandalone = 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_')

const MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/

function plural(word, num) {
  const forms = word.split('_')
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]) // eslint-disable-line
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
  const format = {
    mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
    hh: 'час_часа_часов',
    dd: 'день_дня_дней',
    MM: 'месяц_месяца_месяцев',
    yy: 'год_года_лет'
  }
  if (key === 'm') {
    return withoutSuffix ? 'минута' : 'минуту'
  }

  return `${number} ${plural(format[key], +number)}`
}
const months = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()]
  }
  return monthStandalone[dayjsInstance.month()]
}
months.s = monthStandalone
months.f = monthFormat

const monthsShort = (dayjsInstance, format) => {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthShortFormat[dayjsInstance.month()]
  }
  return monthShortStandalone[dayjsInstance.month()]
}
monthsShort.s = monthShortStandalone
monthsShort.f = monthShortFormat

const locale = {
  name: 'ru',
  weekdays: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
  weekdaysShort: 'Вск_Пнд_Втр_Срд_Чтв_Птн_Сбт'.split('_'),
  weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  months,
  monthsShort,
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY в HH:mm',
    LLLL: 'dddd, D MMMM YYYY в HH:mm'
  },
  relativeTime: {
    future: 'через %s',
    past: '%s назад',
    s: 'несколько секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: 'час',
    hh: relativeTimeWithPlural,
    d: 'день',
    dd: relativeTimeWithPlural,
    M: 'месяц',
    MM: relativeTimeWithPlural,
    y: 'год',
    yy: relativeTimeWithPlural
  },
  ordinal: n => n
}

dayjs.locale(locale, null, false)
