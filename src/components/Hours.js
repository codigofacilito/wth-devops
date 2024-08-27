import React from 'react';

const Hours = () => {
  const getOpeningHours = () => {
    const today = new Date();
    const dayOfWeek = today.getUTCDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 5) { 
      return '10:00 AM - 4:00 PM';
    } else { 
      return '9:00 AM - 8:00 PM';
    }
  };

  return (
    <div>
      <h2>Horas del dia</h2>
      <p>{getOpeningHours()}</p>
    </div>
  );
};

export default Hours;

