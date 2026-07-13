import AuthService from '../services/auth.service.js';

const AuthController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email es requerido' });
      }

      if (!password || typeof password !== 'string') {
        return res.status(400).json({ error: 'Password es requerido' });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email no es válido' });
      }

      if (password.length < 6) {
        return res.status(400).json({ error: 'Password debe tener al menos 6 caracteres' });
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
