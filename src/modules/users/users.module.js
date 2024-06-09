import { UsersController } from "./users.controller.js";
import { UsersService } from "./users.service.js";


const UsersModule = (app) => {
    const db = app.locals.db;
    // console.log(db, "🚀 ~ UsersModule ~ db:",)
    const usersService = new UsersService(db);
    const usersController = new UsersController(usersService);

    usersController.registerRoutes(app);
};

export { UsersModule };
