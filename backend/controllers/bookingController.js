// Контроллер для работы с бронированиями
const pool = require('../db/pool');

/**
 * Создание новой заявки на бронирование
 * @route POST /api/bookings
 */
exports.createBooking = async (req, res) => {
  try {
    const { propertyId, guestId, startDate, endDate } = req.body;
    
    // TODO: Проверка доступности дат в таблице занятости (овербукинг)
    
    const newBooking = await pool.query(
      'INSERT INTO bookings (property_id, guest_id, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [propertyId, guestId, startDate, endDate, 'Ожидает ответа']
    );

    res.status(201).json(newBooking.rows[0]);
  } catch (err) {
    console.error('Ошибка при создании брони:', err.message);
    res.status(500).send('Server Error');
  }
};
