import { ProductsController } from "./products.controller.js";
import { ProductsService } from "./products.service.js";



const ProductsModule = (app) => {
    const db = app.locals.db;
    const productsService = new ProductsService(db);
    const productsController = new ProductsController(productsService);

    productsController.registerRoutes(app);
};

export { ProductsModule };
