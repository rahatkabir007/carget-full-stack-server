import { ObjectId } from "mongodb";

class OrdersService {
    constructor(db) {
        this.collection = db?.collection('orders');
    }

    async placeOrder(req) {
        const orderDetails = req.body;
        const result = await this.collection.insertOne(orderDetails);
        return result;
    }

    async getOrders() {
        return await this.collection.find().toArray();
    }

    async getOrderById(req) {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const orders = await this.collection.findOne(query);
        return orders;
    }

    async deleteOrder(req) {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await this.collection.deleteOne(query);
        return result;
    }

    async updateStatus(req) {
        const id = req.params.id;
        const updatedStatus = req.body.status;
        const filter = { _id: ObjectId(id) };
        const result = await this.collection.updateOne(filter, {
            $set: { status: updatedStatus },
        });
        return result;
    }
}

export {OrdersService}