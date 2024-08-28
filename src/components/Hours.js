// Placeholder to host a component
import React from 'react';

const Hours = () => {
  // Crear un array con los nombres de los días de la semana
  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];

  // Obtener el día actual
  const today = new Date();
  const currentDay = daysOfWeek[today.getDay()];
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes().toString().padStart(2, '0');

  return (
    <div>
      <h2>Current Time</h2>
      <p>Day: {currentDay}</p>
      <p>Time: {currentHour}:{currentMinute}</p>
    </div>
  );
};

export default Hours;
