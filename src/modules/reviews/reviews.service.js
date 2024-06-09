class ReviewsService {
    constructor(db) {
        this.collection = db?.collection('reviews');
    }

    async addReview(req) {
        const reviewDetails = req.body;
        const result = await this.collection.insertOne(reviewDetails);
        return result;
    }

    async getReviews() {
        return await this.collection.find().toArray();
    }
}

export { ReviewsService  }