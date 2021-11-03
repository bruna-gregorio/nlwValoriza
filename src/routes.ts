import { Router } from "express";

import { ensureAdmin } from "./middleware/ensureAdmin";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListAdminUsersController } from "./controllers/ListAdminUsersController";

const router = Router()

const createUserController = new CreateUserController
const createTagController = new CreateTagController
const authenticateUserController = new AuthenticateUserController
const createComplimentController = new CreateComplimentController
const listUserSendComplimentsController = new ListUserSendComplimentsController
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController
const listTagsController = new ListTagsController
const listUsersController = new ListUsersController
const listAdminUsersController = new ListAdminUsersController

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

//teste
router.get("/users/admin", ensureAuthenticated, listAdminUsersController.handle)

export { router }