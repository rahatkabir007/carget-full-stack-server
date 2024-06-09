import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config();

const connectDB = async () => {
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yo3n6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        console.log("🚀 ~ connectDB ~ uri:", uri)
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('carget'); // return the client after connection is established
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
        process.exit(1);
    }
};

export { connectDB };



