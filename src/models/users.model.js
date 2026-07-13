import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase.js';

const USERS_COLLECTION = 'users';

const UserModel = {
  /**
   * Busca un usuario por su email.
   * @param {string} email - Email del usuario a buscar.
   * @returns {Promise<Object|null>} Usuario con id y datos, o null si no existe.
   */
  async findByEmail(email) {
    const q = query(
      collection(db, USERS_COLLECTION),
      where('email', '==', email),
      limit(1)
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const docSnap = snapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() };
  }
};

export default UserModel;
