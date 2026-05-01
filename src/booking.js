/**
 * Класс для управления процессом бронирования жилья.
 */
class BookingService {
  /**
   * Создает новый запрос на бронирование.
   * @param {number} propertyId - ID объекта недвижимости.
   * @param {string} guestName - Имя гостя.
   * @param {string} startDate - Дата заезда (ГГГГ-ММ-ДД).
   * @param {string} endDate - Дата выезда (ГГГГ-ММ-ДД).
   * @returns {Object} Объект созданного бронирования со статусом "Ожидает".
   */
  createBooking(propertyId, guestName, startDate, endDate) {
    return {
      id: Math.floor(Math.random() * 1000),
      propertyId,
      guestName,
      status: "Pending"
    };
  }

  /**
   * Обновляет статус бронирования (Одобрено/Отклонено).
   * @param {number} bookingId - ID бронирования.
   * @param {string} newStatus - Новый статус.
   */
  updateStatus(bookingId, newStatus) {
    console.log(`Статус брони ${bookingId} изменен на ${newStatus}`);
  }
}
