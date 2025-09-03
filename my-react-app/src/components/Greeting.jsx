import React from 'react';

const greetingStyle = {
  textAlign: 'center',
  color: '#6d4c2f',
  fontSize: '1.15rem',
  marginBottom: '10px',
};

function Greeting(props) {
  return (
    <div>
      <p style={greetingStyle}>ยินดีต้อนรับสู่แอป React ของฉัน!</p>
    </div>
  );
}

export default Greeting;