import ProductModel from '../models/products.models.js';

const ProductService = {
  async getAllProducts() {
    return await ProductModel.findAll();
  },

  async getProductById(id) {
    const product = await ProductModel.findById(id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  },

  async createProduct(data) {
    return await ProductModel.create(data);
  },

  async deleteProduct(id) {
    const product = await ProductModel.delete(id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }
};

export default ProductService;
