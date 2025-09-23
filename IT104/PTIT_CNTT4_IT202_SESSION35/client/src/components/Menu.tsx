import {
  DollarOutlined,
  FileOutlined,
  FundOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ScheduleOutlined from "@ant-design/icons/lib/icons/ScheduleOutlined";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../store/slice/menu";

export default function Menu() {
    const reslut = useSelector((data:any) => {
        return data.handleClick.flag
    })
    const dispatch = useDispatch()
    const handleOutLined = () => {
        dispatch(handleClick())
    }
  return (
    <div>
        <div>
            <ScheduleOutlined />
            {reslut === true ?  "" : <span>Bảng điều khiển</span>}
            
        </div>
        <div>
            <UserOutlined />
            {reslut === true ?  "" :<span>Tài khoản</span>}
                
        </div>
        <div>
            <DollarOutlined />
            {reslut === true ?  "" : <span>Tài sản</span>}
            
        </div>
        <div>
            <FundOutlined />
            {reslut === true ?  "" : <span>Thống kê</span>}
            
        </div>
        <div>
            <FileOutlined />
            {reslut === true ?  "" : <span>Tài liệu</span>}
                
        </div>
      <div onClick={handleOutLined}>
        {reslut === true ? <RightOutlined />  :  <div>
            <LeftOutlined />
            <span>Thu gọn</span>
        </div> }
      </div>
    </div>
  );
}
