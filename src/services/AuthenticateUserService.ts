import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"; // gera o token

import { UsersRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    //Verificar se email existe
    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    //Verificar se senha está correta

    // comparar = 1234567 / hash d859595356265dfgthasdfreg
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    //Gerar token
    const token = sign(
      {
        email: user.email,
      },
      "e396cab472d00f6441b4192142c2e3b3",
      {
        subject: user.id, expiresIn: "1d"
      }
    )

    return token
  }
}

export { AuthenticateUserService }