// Evite syntatic sugars

const numberInString = "12345"

// const number = +numberInString
// const number = parseInt(numberInString)
const number = Number(numberInString)

// const isNumberNotNull = !!number
const isNumberNotNull = Boolean(number)

const numberAsString = String(number)
