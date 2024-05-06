import React from 'react'

export default function Ex03() {
    const [selectedDate,setSelectedDate] =React.useState('');
    const handleDateChange = (e:any)=>{
        setSelectedDate(e.target.value);
    }
  return (
    <div>
        <h2>Ex03</h2>
        <label htmlFor="dateInput">chọn 1 ngày:</label>
        {/* Input cho người dùng nhập liệu */}
        <input 
            type="date" 
            id="dateInput" 
            value={selectedDate} 
            onChange={handleDateChange} 
        />
        {/* Hiển thị giá trị đã chọn */}
        <p>bạn đã chọn: {selectedDate}</p>
    </div>
  )
}
