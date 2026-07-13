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

      if (!id || typeof id !== 'string' || id.trim().length === 0) {
        return res.status(400).json({ error: 'id es requerido' });
      }

      const product = await ProductService.getProductById(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const { name, price, category } = req.body;

      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ error: 'name es requerido y debe ser un string no vacío' });
      }

      if (price === undefined || typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'price es requerido, debe ser un number mayor a 0' });
      }

      if (!category || typeof category !== 'string') {
        return res.status(400).json({ error: 'category es requerido y debe ser un string' });
      }

      const product = await ProductService.createProduct({ name, price, category });
      res.status(201).json({ id: product.id, message: 'Producto creado exitosamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id || typeof id !== 'string' || id.trim().length === 0) {
        return res.status(400).json({ error: 'id es requerido' });
      }

      await ProductService.deleteProduct(id);
      res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

export default ProductController;
