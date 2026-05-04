const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Настройка Middleware
app.use(cors());
app.use(express.json());

// Подключение к PostgreSQL (настройки будут в .env)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// TODO: Импорт маршрутов (Routes)
// const bookingRoutes = require('./routes/bookingRoutes');
// app.use('/api/bookings', bookingRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running', database: 'connected' });
});

app.listen(PORT, () => {
  console.log(`Сервер BookingService запущен на порту ${PORT}`);
});
