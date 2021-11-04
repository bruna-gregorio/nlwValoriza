import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"

import { UsersRepositories } from "../repositories/UserRepositories"

class ListAdminUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const usersAdmin = usersRepositories.find({
      where: {
        admin: true
      }
    })

    return classToPlain(usersAdmin)
  }

}

export { ListAdminUsersService }