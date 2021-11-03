import { Request, Response } from "express";
import { ListAdminUsersService } from "../services/ListAdminUsersService";

class ListAdminUsersController {
  async handle(request: Request, response: Response) {
    const listAdminUsersService = new ListAdminUsersService

    const usersAdmin = await listAdminUsersService.execute()

    return response.json(usersAdmin)
  }
}

export { ListAdminUsersController }