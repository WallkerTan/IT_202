import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const res = useSelector((data: any) => {
    return data.infor.information;
  });
  return (
    <div>
      <b>Thong tin ca nhan</b>
      <p>id : {res.id}</p>
      <p>Ho va ten : {res.name}</p>
      <p>Gioi tinh : {res.gender}</p>
      <p>Ngay sinh : {res.birth}</p>
      <p>Dia chi : {res.address}</p>
    </div>
  );
}
