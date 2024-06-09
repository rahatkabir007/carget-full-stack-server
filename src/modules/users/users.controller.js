class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }

    registerRoutes(app) {
        
        app.post('/users', async (req, res) => {
            try {
                const result = await this.usersService.createUser(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.get('/users/:email', async (req, res) => {
            try {
                const result = await this.usersService.getUserByEmail(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.put('/users', async(req, res) => {
            try {
                const result = await this.usersService.updateGoogleUser(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
          
        });
        
        app.put('/users/admin', async (req, res) => {
            try {
                const result = await this.usersService.updateUserRole(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }

        });
      
    }
}

export { UsersController };