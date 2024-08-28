// Placeholder to host a component
import React, { useState, useEffect } from "react";

const Hours = () => {
  const [currentTime, setCurrentTime] = useState({ day: '', hours: '', minutes: '' });

  useEffect(() => {
    // Esto solo se ejecuta en el lado del cliente
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.toLocaleString('en-US', { weekday: 'long' });

    setCurrentTime({
      day,
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
    });
  }, []);

  return (
    <div>
      <h2>Today is {currentTime.day}</h2>
      <p>Current time: {currentTime.hours}:{currentTime.minutes}</p>
    </div>
  );
};

export default Hours;
