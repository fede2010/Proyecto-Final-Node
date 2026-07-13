import AuthService from '../services/auth.service.js';

const AuthController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        console.log('Credenciales incompletas');
        return res.status(400).json({ error: 'Email y password son requeridos' });
      }

      const user = await AuthService.validateCredentials(email, password);

      if (!user) {
        console.log('Credenciales inválidas para:', email);
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      const token = AuthService.generateToken(user);
      res.json({ token });
    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

export default AuthController;
