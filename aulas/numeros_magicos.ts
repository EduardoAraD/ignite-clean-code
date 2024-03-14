// Simples
// setTimeout, setInterval
setInterval(() => {}, 1000)
setInterval(() => {}, 2592000000) // 30 days
setInterval(() => {}, 1000 * 60 * 60 * 24 * 30) // 30 days
const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30
setInterval(() => {}, INTERVAL_30_DAYS)

// Avançados

function calculateDiscount(priceInCents, discountAmountInPercentage) {
  // retorna desconto
}
