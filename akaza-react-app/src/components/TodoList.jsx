import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'Kamado Tanjirō', completed: false },
        { id: 2, text: 'Kamado Nezuko', completed: false },
        { id: 3, text: 'Agatsuma Zenitsu', completed: false },
        { id: 4, text: 'Hashibira Inosuke', completed: false },
        { id: 5, text: 'Tsuyuri Kanao', completed: false },
        { id: 6, text: 'Shinazugawa Genya', completed: true },
        { id: 7, text: 'Tomioka Giyū', completed: false },
        { id: 8, text: 'Kochō Shinobu', completed: true },
        { id: 9, text: 'Rengoku Kyōjurō', completed: true },
        { id: 10, text: 'Uzui Tengen', completed: true },
        { id: 11, text: 'Kanroji Mitsuri', completed: true },
        { id: 12, text: 'Tokitō Muichirō', completed: true },
        { id: 13, text: 'Himejima Gyōmei', completed: true },
        { id: 14, text: 'Iguro Obanai', completed: true },
        { id: 15, text: 'Shinazugawa Sanemi', completed: true },
        { id: 16, text: 'Kibutsuji Muzan', completed: false },
        { id: 17, text: 'Kokushibō', completed: true },
        { id: 18, text: 'Dōma', completed: true },
        { id: 19, text: 'Akaza', completed: true },
        { id: 20, text: 'Hantengu', completed: true },
        { id: 21, text: 'Gyokko', completed: true },
        { id: 22, text: 'Daki', completed: true },
        { id: 23, text: 'Gyūtarō', completed: true },
        { id: 24, text: 'Nakime', completed: true },
        { id: 25, text: 'Kaigaku', completed: true },
        { id: 26, text: 'Enmu', completed: true },
        { id: 27, text: 'Rokuro', completed: true },
        { id: 28, text: 'Wakuraba', completed: true },
        { id: 29, text: 'Mukago', completed: true },
        { id: 30, text: 'Rui', completed: true },
        { id: 31, text: 'Kamanue', completed: true },
        { id: 32, text: 'Kyōgai', completed: true },
        { id: 33, text: 'Hairō', completed: true }
    ];

    const slayers = todos.filter(todo => todo.id >= 1 && todo.id <= 15);
    const demons = todos.filter(todo => todo.id >= 16 && todo.id <= 33);

    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>

            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
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
            {/* กลุ่ม 1: หน่วยพิฆาตอสูร */}
            <h2 style={{ color: '#667eea', marginTop: '30px' }}>หน่วยพิฆาตอสูร 🌸</h2>
            {slayers.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span
                        style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#666' : '#333'
                        }}
                    >
                        {todo.text}
                    </span>
                </div>
            ))}

            {/* กลุ่ม 2: อสูรจันทรา */}
            <h2 style={{ color: '#e53935', marginTop: '30px' }}>12 อสูรจันทรา 🌕</h2>
            {demons.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#fdecea' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span
                        style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#999' : '#333'
                        }}
                    >
                        {todo.text}
                    </span>
                </div>
            ))}


            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;