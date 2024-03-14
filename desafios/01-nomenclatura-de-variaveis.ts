// Nomenclatura de variáveis

const listCategoryFollower = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserGithubAndCategoryFollower(req, res) {
  const userNameUserToGithub = String(req.query.username)

  if (!userNameUserToGithub) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseUserGithub = await fetch(`https://api.github.com/users/${userNameUserToGithub}`);

  if (responseUserGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${userNameUserToGithub}" not found`
    })
  }

  const userGithub = await responseUserGithub.json()

  const orderListCategoryByFollower = listCategoryFollower.sort((a, b) =>  b.followers - a.followers); 

  const categoryFollower = orderListCategoryByFollower.find(categoryFollower => userGithub.followers > categoryFollower.followers)

  const result = {
    userGithub,
    category: categoryFollower.title
  }

  return result
}

getUserGithubAndCategoryFollower({ query: {
  username: 'josepholiveira'
}}, {})