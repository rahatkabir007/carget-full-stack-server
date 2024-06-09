
class UsersService {
    constructor(db) {
        this.collection = db?.collection('users');
    } 

    async createUser(req) {
        const user = req.body;
        const result = await this.collection.insertOne(user);
        return result;
    }

    async getUserByEmail(req) {
        const email = req.params.email;
        const query = { email: email };
        const result = await this.collection.findOne(query);
        let isAdmin = false;
        if (result?.role === 'admin') {
            isAdmin = true;
        }
        return {admin: isAdmin}
    }

    async updateGoogleUser(req) {
        const user = req.body;
        const filter = { email: user.email };
        const options = { upsert: true };
        const updateDoc = {
            $set: user
        }
        const result = await this.collection.updateOne(filter, updateDoc, options);
        return result;
    }

    async updateUserRole(req) {
        const user = req.body;
        const filter = { email: user.email };
        const updateDoc = {
            $set: { role: 'admin' }
        };
        const result = await this.collection.updateOne(filter, updateDoc);
        return result;
    }
    
}



export { UsersService };