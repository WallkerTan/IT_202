import React, { useState } from "react";

const Checkbox: React.FC = () => {
    const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string) => {
        if (selected.includes(value)) {
            // nếu đã có thì bỏ ra
            setSelected(selected.filter((item) => item !== value));
        } else {
            // nếu chưa có thì thêm vào
            setSelected([...selected, value]);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <p>Sở thích: {JSON.stringify(selected)}</p>
            {options.map((opt) => (
                <div key={opt}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selected.includes(opt)}
                            onChange={() => handleChange(opt)}
                        />
                        {opt}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Checkbox;
