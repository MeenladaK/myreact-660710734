import React from 'react';

const cardStyle = {
  background: '#cfc0a6',
  borderRadius: '18px',
  boxShadow: '0 2px 8px rgba(170, 147, 110, 0.08)',
  maxWidth: '300px',
  margin: '24px auto',
  padding: '20px 16px',
  textAlign: 'center',
  color: '#5c4326', // สำหรับ h2
};

const avatarStyle = {
  width: '100px',
  height: '100px', 
  borderRadius: '50%',
  border: '3px solid #5c4326',
  marginBottom: '4px',
  objectFit: 'cover',
};

const nameStyle = {
  margin: '8px 0 6px 0',
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#705435ff', // สีเข้มกว่า
};

const infoStyle = {
  margin: '4px 0 0 0',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#7d6841ff', // สีอ่อนกว่า h2
};

function UserCard() {
  return (
    <div style={cardStyle}>
      <img
        src="https://ih1.redbubble.net/image.5239428255.7463/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
        alt="My Avatar"
        style={avatarStyle}
      />
      <h2 style={nameStyle}>Meenlada</h2>
      <p style={infoStyle}>
        รหัสนักศึกษา : 660710734<br/>
        ชื่อ-นามสกุล : มีนลดา แก้วพินิจ
      </p>
    </div>
  );
}

export default UserCard;