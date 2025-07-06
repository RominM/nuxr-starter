import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { username, password } = body

  if (!username || !password) {
    event.node.res.statusCode = 400
    return { error: 'Veuillez remplir tous les champs' }
  }

  if (username !== config.ADMIN_USERNAME || password !== config.ADMIN_PASSWORD) {
    event.node.res.statusCode = 401
    return { error: 'La combinaison utilisateur/mot de passe est incorrecte' }
  }

  const token = jwt.sign({ username }, config.JWT_SECRET, { expiresIn: '2h' })
  return { data: { token } }
})
