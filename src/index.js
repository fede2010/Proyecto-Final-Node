import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import productsRouter from './routes/products.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'API TechLab - Componentes de PC' });
});

app.use('/auth', authRouter);
app.use('/api/products', productsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'JSON inválido en el body' });
  }

  res.status(500).json({ error: 'Error interno del servidor' });
});

// Solo escucha el puerto en desarrollo local
// En Vercel, la app se ejecuta como serverless function
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;
