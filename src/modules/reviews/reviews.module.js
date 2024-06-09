import { ReviewsController } from "./reviews.controller.js";
import { ReviewsService } from "./reviews.service.js";


const ReviewsModule = (app) => {
    const db = app.locals.db;
    const reviewsService = new ReviewsService(db);
    const reviewsController = new ReviewsController(reviewsService);

    reviewsController.registerRoutes(app);
};

export { ReviewsModule };
