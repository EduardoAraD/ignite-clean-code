// Rota para criação do usuário (name, email, password)
// Controller (name, email, password)
// Repositório (name, email, password)

createUserRoute({
  body: { name, email, password },
  params: { id: 1 }
})
createUserRoute({
  params: { id: 1 }
})

function createUserRoute({ body, params }) {
  // validações
  const { name, email, password } = body

  createUserController({ name, email, password})
}

function createUserController({ data }) {
  const { name, email, password } = data

  userRepository.create({
    name,
    email,
    password
  })
}

const userRepository = {
  create(data) {
    const user = createUserOnDatabase()

    // return user
    return {
      user,
    }
  }
}

// Receba informações em formato de objeto
// Devolva informações em formato de objeto
