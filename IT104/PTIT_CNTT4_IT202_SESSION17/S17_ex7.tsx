import React, { useState } from "react";

const Select: React.FC = () => {
    const [city, setCity] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <label htmlFor="city">Thành phố: </label>
            <select id="city" value={city} onChange={handleChange}>
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>

            {/* Hiển thị tên thành phố đã chọn */}
            {city && (
                <p style={{ marginTop: "10px" }}>
                    Thành phố: <strong>{city}</strong>
                </p>
            )}
        </div>
    );
};

export default Select;
