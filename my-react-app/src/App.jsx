// src/App.jsx
import React from 'react';
import ComponentExamples from './components/ComponentExamples';

const mainStyle = {
  minHeight: '100vh',
  width: '100vw',
  margin: 0,
  padding: 0,
  background: '#faf7ef', // หรือ #fff ตามที่ต้องการ
  fontFamily: '"Kanit", sans-serif',
  letterSpacing: '0.01em',
};

function App() {
  return (
    <div style={mainStyle}>
      <ComponentExamples />
    </div>
  );
}

export default App;