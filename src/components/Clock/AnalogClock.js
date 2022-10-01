import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='app_clock'>
      <Clock value={value} />
    </div>
  );
};

export default AnalogClock;
