import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

type itemp = {
    id: string;
    name: string;
    price: string;
};

const items: itemp[] = [
    { id: "1", name: "Apple", price: "10" },
    { id: "2", name: "Banana", price: "5" },
    { id: "3", name: "Orange", price: "8" },
    { id: "4", name: "Mango", price: "15" },
    { id: "5", name: "Grapes", price: "12" },
];

export default function S27_4() {
    const [dataSearch, setdata] = useState("");
    const [searchParam] = useSearchParams();
    const dataURL = searchParam.get("name") || "";
    const [displayList, setDisplayList] = useState(items);
    const navigate = useNavigate();
    const handalclick = () => {
        const temp = items.filter((e) => e.name.includes(dataSearch || ""));
        setDisplayList(temp);
        navigate(`./?name=${dataSearch}`);
    };
    useEffect(() => {
        const temp = items.filter((e) => e.name.includes(dataURL));
        setDisplayList(temp);
        setdata(dataURL);
    }, [dataURL]);
    return (
        <div>
            <input
                className="border-1 rounded-2xl"
                type="text"
                value={dataSearch}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setdata(e.target.value)
                }
            />
            <Button disabled={!dataSearch.trim()} onClick={handalclick}>
                Tìm kiếm
            </Button>
            <div className="flex w-full justify-around">
                {displayList.map((e) => (
                    <div key={e.id} className="p-2 rounded-2xl bg-gray-400/30 ">
                        <div>{e.id}</div>
                        <div>{e.name}</div>
                        <div>{e.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
