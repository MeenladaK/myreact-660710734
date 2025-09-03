import React, { useState, useEffect } from 'react';

const clockStyle = {
  textAlign: 'center',
  color: '#9c8356',
  fontSize: '1.15rem',
  marginBottom: '10px',
};

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={clockStyle}>
      {time.toLocaleString("th-TH", { dateStyle: "full", timeStyle: "medium" })}
    </div>
  );
}

export default Clock;