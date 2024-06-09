import { ObjectId } from "mongodb";

class ProductsService {
    constructor(db) {
        this.collection = db?.collection('products');
    } 

    async createProduct(req) {
        const product = req.body;
        const result = await this.collection.insertOne(product);
        return result;
    }

    async getProducts() {
        const cursor = this.collection.find({});
        const products = await cursor.toArray();
        return await this.collection.find().toArray();
    }

    async deleteProduct(req) {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await this.collection.deleteOne(query);
        return result;
    }

    async getProductById(req) {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const product = await this.collection.findOne(query);
        return product;
    }
}



export { ProductsService };