class ReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }

    registerRoutes(app) {
        app.post('/reviews', async (req, res) => {
            try {
                const result = await this.reviewsService.addReview(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        })

        app.get('/reviews', async (req, res) => { 
            try {
                const result = await this.reviewsService.getReviews();
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        })
    }
}

export { ReviewsController  };