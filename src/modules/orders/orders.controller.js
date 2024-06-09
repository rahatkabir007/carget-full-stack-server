class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }

    registerRoutes(app) {
        app.post('/placeOrders', async (req, res) => {
            try {
                const result = await this.ordersService.placeOrder(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        })

        app.get('/orders', async (req, res) => {
            try {
                const result = await this.ordersService.getOrders();
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.get('/orders/:id', async (req, res) => {
            try {
                const result = await this.ordersService.getOrderById(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        })

        //delete orders
        app.delete('/orders/:id', async (req, res) => {
            try {
                const result = await this.ordersService.deleteOrder(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        })

        //status update
        app.put('/updateStatus/:id', async (req, res) => {
            try {
                const result = await this.ordersService.updateStatus(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        })
    }
}

export { OrdersController };