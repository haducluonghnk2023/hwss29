import React from 'react'

export default function Ex04() {
    const provinces = [
        "hà nội" ,
        "hồ chí minh",
        "đà nẵng",
        "hải phòng",
        "quảng ninh",
        "quảng bình",
    ]
    const [selectedProvince,setSelectedProvin] = React.useState('');
    const handleProvinceChange = (e:any) => {
        setSelectedProvin(e.target.value);
    }
  return (
    <div>
        <h2>Ex04</h2>
        <label htmlFor="provinceSelect">chon. thanh` pho':</label>
        {/* Select box cho người dùng chọn */}
        <select 
            id="provinceSelect" 
            value={selectedProvince} 
            onChange={handleProvinceChange}
        >
            <option value="">-- chon. thanh` pho' --</option>
            {/* Duyệt qua danh sách các tỉnh/thành phố và tạo option cho mỗi cái */}
            {provinces.map((province, index) => (
            <option key={index} value={province}>{province}</option>
            ))}
        </select>
        {/* Hiển thị giá trị đã chọn */}
        <p>thanh` pho' da~ chon.: {selectedProvince}</p>
    </div>
  )
}
