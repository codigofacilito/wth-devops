// components/Hours.js
import React from 'react';

// Función para obtener el horario de apertura basado en el día de la semana
const getOpenHours = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Domingo) - 6 (Sábado)

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    return '10 a.m. - 4 p.m.'; // Lunes a Viernes
  } else {
    return '9 a.m. - 8 p.m.'; // Sábado y Domingo
  }
};

// Componente que muestra el horario de apertura
const Hours = () => {
  const hours = getOpenHours();

  return (
    <div>
      <h3>Horas de Apertura del Refugio</h3>
      <p>Hoy estamos abiertos de: {hours}</p>
    </div>
  );
};

export default Hours;