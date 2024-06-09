class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }

    registerRoutes(app) {
        app.post('/products', async (req, res) => {
            try {
                const result = await this.productsService.createProduct(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.get('/products', async (req, res) => {
            try {
                const result = await this.productsService.getProducts();
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.delete('/products/:id', async (req, res) => {
            try {
                const result = await this.productsService.deleteProduct(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });

        app.get('/selectedproduct/:id', async (req, res) => {
            try {
                const result = await this.productsService.getProductById(req);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });
    }
}

export { ProductsController };