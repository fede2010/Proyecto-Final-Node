import jwt from 'jsonwebtoken';
import UserModel from '../models/users.model.js';

const AuthService = {
  async validateCredentials(email, password) {
    const user = await UserModel.findByEmail(email);
    if (!user) return null;
    if (user.password !== password) return null;
    return user;
  },

  generateToken(user) {
    return jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  },

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
};

export default AuthService;
