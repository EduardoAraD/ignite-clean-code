// Nomenclatura de variavéis

const users = ['Diego', 'Mike', 'Rodrigo']

// versao 1
const filtered = users.filter(u => u.startsWith('D'))
console.log(filtered)

// evitar diminutivos
// Evite nomes genéricos (data, response, list, args, params)
const usersStartingWithLetterD = users.filter(user => user.startsWith('D'))
console.log(filtered)
