import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"; // verificar se o token é valido


interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Receber o token
  const authToken = request.headers.authorization

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    // Validar se o token é valido
    const { sub } = verify(token, "e396cab472d00f6441b4192142c2e3b3") as IPayload

    // Recuperar informações do usuario
    request.user_id = sub

    return next()
  } catch (err) {
    return response.status(401).end()
  }


}