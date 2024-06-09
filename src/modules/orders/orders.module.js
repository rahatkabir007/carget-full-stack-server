import { OrdersController } from "./orders.controller.js";
import { OrdersService } from "./orders.service.js";

const OrdersModule = (app) => {
    const db = app.locals.db;
    const ordersService = new OrdersService(db);
    const ordersController = new OrdersController(ordersService);

    ordersController.registerRoutes(app);
};

export { OrdersModule };
