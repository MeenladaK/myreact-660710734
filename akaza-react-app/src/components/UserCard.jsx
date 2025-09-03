import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://i.pinimg.com/1200x/71/9c/58/719c586b0264e2a10d5706529bc7c9d5.jpg" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            border: '2px solid #848080ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#1031c6ff', margin: '10px 0' }}>
        Akaza
    </h3>
);

const UserBio = () => (
    <div style={{
        color: '#333',
        fontSize: '14px',
        textAlign: 'left',
        lineHeight: '1.6',
        marginTop: '10px'
    }}>
        <p><strong>ตำแหน่ง:</strong> อสูรข้างขึ้นลำดับ 3</p>
        <p><strong>ชื่อเดิม:</strong> Hakuji Soyama (ฮาคุจิ โซยามะ)</p>
        <p><strong>อดีต:</strong> เคยเป็นมนุษย์ที่ยากจน สูญเสียคนรักและอาจารย์จนกลายเป็นอสูรหลังฆ่าคนด้วยความแค้น</p>
        <p><strong>นิสัย:</strong> เกลียดความอ่อนแอ เคารพคนเก่ง ไม่ทำร้ายผู้หญิง</p>
        <p><strong>ศึกสำคัญ:</strong> ฆ่าเร็นโกคุในศึกรถไฟ ต่อสู้กับทันจิโร่และกิยูจนเลือกตายเองหลังฟื้นความทรงจำเกี่ยวกับคนรัก</p>
    </div>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;