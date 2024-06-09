import jwt from "jsonwebtoken"

function authMiddleware(req, res, next) {
    const publicPaths = ['/', '/register', '/login'];
    if (publicPaths.includes(req.path)) {
        return next();
    }

    const bearerToken = req.headers['authorization'];
    if (!bearerToken) {
        return res.status(401).send('Unauthorized');
    }

    const token = bearerToken.split(" ").pop()

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // console.log(user,err)
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
}

export { authMiddleware };