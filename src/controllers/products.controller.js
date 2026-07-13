import ProductService from '../services/products.service.js';

const ProductController = {
  async getAll(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json({ id: product.id, message: 'Producto creado exitosamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ProductService.deleteProduct(id);
      res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

export default ProductController;
