import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import donationRoutes from './routes/donationRoutes.js';
import connectDB from './config/db.js'; // ✅ Import DB connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🧩 Connect to MongoDB
connectDB(); // ✅ Call DB connection early

// 🧩 Middleware
app.use(cors());
app.use(express.json());

// 🧠 API routes
app.use('/api/donations', donationRoutes);

// 🏠 Basic route for development
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

// 🧩 Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
