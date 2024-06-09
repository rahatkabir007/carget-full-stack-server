import express from "express"
import cors from "cors"
import { connectDB } from "../../config/database.js";
import { errorMiddleware } from "../../middlewares/error.middleware.js"
import { authMiddleware } from "../../middlewares/auth.middleware.js"
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { UsersModule } from "../users/users.module.js";
import { ProductsModule } from "../products/products.module.js";
import { OrdersModule } from "../orders/orders.module.js";
import { ReviewsModule } from "../reviews/reviews.module.js";

const AppModule = async (app) => {
    // Connect to database
    const db = await connectDB();
    app.locals.db = db;

    // Middlewares
    app.use(cors());
    app.use(express.json());
    // app.use(authMiddleware);
    // Error handling middleware
    app.use(errorMiddleware);

    const appService = new AppService();
    const appController = new AppController(appService);

    appController.registerRoutes(app);

    // Initialize other modules
    UsersModule(app);
    ProductsModule(app);
    OrdersModule(app)
    ReviewsModule(app)


};

export { AppModule };