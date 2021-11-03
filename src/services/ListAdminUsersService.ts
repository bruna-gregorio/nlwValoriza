import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"

class ListAdminUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const usersAdmin = usersRepositories.find({
      where: {
        admin: true
      }
    })

    return usersAdmin
  }

}

export { ListAdminUsersService }