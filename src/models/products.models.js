import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

const PRODUCTS_COLLECTION = 'products';

const ProductModel = {
  /**
   * Obtiene todos los documentos de la colección products.
   * @returns {Promise<Array<Object>>} Lista de productos con id y datos.
   */
  async findAll() {
    const snapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  /**
   * Busca un producto por su id.
   * @param {string} id - Identificador del documento en Firestore.
   * @returns {Promise<Object|null>} Producto con id y datos, o null si no existe.
   */
  async findById(id) {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() };
  },

  /**
   * Crea un nuevo documento en la colección products.
   * Firestore genera el id automáticamente.
   * @param {Object} product - Objeto con los campos del producto.
   * @returns {Promise<Object>} Producto creado con su id.
   */
  async create(product) {
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), product);
    return { id: docRef.id, ...product };
  },

  /**
   * Elimina un producto por su id.
   * @param {string} id - Identificador del documento en Firestore.
   * @returns {Promise<Object|null>} Producto eliminado, o null si no existía.
   */
  async delete(id) {
    const docRef = doc(db, PRODUCTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    await deleteDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }
};

export default ProductModel;
