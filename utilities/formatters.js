//formatters/formatters.js 
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
})
export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number)
}

const NUMBER_FORMATTER = new Intl.NumberFormat(undefined)
export function formatNumber(number) {
  return NUMBER_FORMATTER.format(number)
}

const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
})
export function formatCompactNumber(number) {
  return COMPACT_NUMBER_FORMATTER.format(number)
}

const DIVISIONS = [   //check which categories it falls to
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
]
const RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(undefined, {  //english as default
  numeric: "auto",
})
export function formatRelativeDate(toDate, fromDate = new Date()) {
  let duration = (toDate - fromDate) / 1000

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i]
    if (Math.abs(duration) < division.amount) {
      return RELATIVE_DATE_FORMATTER.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}

//formatters/script.js 
const number = 9_123_456.789123
console.log("Default:\n", number)
console.log("Currency:\n", formatCurrency(number))  //$9,123,456.79
console.log("Number:\n", formatNumber(number))  //9,123,456.79
console.log("Compact:\n", formatCompactNumber(number))  //9.1M

const currentDate = new Date()
const twoMonthsAgo = new Date().setMonth(currentDate.getMonth() - 2)
const yesterday = new Date().setDate(currentDate.getDate() - 1)
const nineDaysAgo = new Date().setDate(currentDate.getDate() - 9)

console.log("Two Months Ago:\n", formatRelativeDate(twoMonthsAgo))  //2 months ago
console.log("Yesterday:\n", formatRelativeDate(yesterday)) //yesterday
console.log("Nine Days Ago:\n", formatRelativeDate(nineDaysAgo)) //last week
console.log(
  "Yesterday vs Nine Days Ago:\n",
  formatRelativeDate(yesterday, nineDaysAgo)
)
