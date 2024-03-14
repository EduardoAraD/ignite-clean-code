interface User{
  name: string
  email: string
  phone: string
}
interface Params {
  id?: string
}


function updateUserRoute({ body, params }) {
  const { name, email, phone } = body
  const { id } = params

  updateUserController({
    data: {
      name,
      email,
      phone,
    },
    params: {
      id,
    }
  })
}

function updateUserController({ data, params }) {
  const { name, email, phone } = data
  const { id } = params

  userRepository.update({
    data: {
      name,
      email,
      phone,
    },
    params: {
      id,
    }
  })
}

const userRepository = {
  update: ({ data, params }: { data: User, params: Params}) => {
    const { name, email, phone } = data
    const { id } = params
    const user = updateUserDatabase({ name, email, phone }, { id })

    return {
      user,
    }
  },
}