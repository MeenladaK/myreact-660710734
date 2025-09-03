import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'เรียน React พื้นฐาน', completed: true },
        { id: 2, text: 'ทำการบ้านวิชา AI', completed: true },
        { id: 3, text: 'อ่านหนังสือสอบ', completed: true },
        { id: 4, text: 'ทำความสะอาดห้อง', completed: true },
        { id: 5, text: 'เรียนภาษาอังกฤษ', completed: true },
        { id: 6, text: 'ดูดาบพิฆาตอสูร', completed: true },
        { id: 7, text: 'ฝึกทำข้อสอบ DBA', completed: false },
        { id: 8, text: 'ดูมหาเวทย์ผนึกมาร', completed: false },
        { id: 9, text: 'พาแมวไปฉีดวัคซีน', completed: false },
        { id: 10, text: 'ซักผ้า', completed: false },
        { id: 11, text: 'ทำการบ้าน ROS2', completed: false },
        { id: 12, text: 'ดูวันพีช', completed: false }
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h2 style={{ color: '#6d4c2f' }}>
                รายการที่ต้องทำ 📝
            </h2>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#b09673',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#f2eddf' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#b0a080' : '#3e372e'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: '#b09673',
                color: '#ffffffff',
                borderRadius: '8px',
                fontWeight: 'bold',
            }}>
                ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ ✨
            </div>
        </div>
    );
};

export default TodoList;