import { H3Event, getHeader, createError } from 'h3'
import jwt from 'jsonwebtoken'

export function verifyAdminToken(event: H3Event) {
  const config = useRuntimeConfig()
  const authHeader = getHeader(event, 'authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({ statusCode: 401, statusMessage: 'Token manquant' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET)
    return decoded 
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: 'Token invalide' })
  }
}
