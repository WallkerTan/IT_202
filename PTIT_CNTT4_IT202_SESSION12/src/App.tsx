import React from "react";
import ListCourse from "../components/PTIT_CNTT04_IT104_Session12_Bai01/ListCourse";
//import './App.css';
import Calculation from "../components/PTIT_CNTT04_IT104_Session12_Bai02/Calculation";
import UserInfo from "../components/PTIT_CNTT04_IT104_Session12_Bai03/UserInfo";
import ColorBox from "../components/PTIT_CNTT04_IT104_Session12_Bai04/ColorBox";
import FormatName from "../components/PTIT_CNTT04_IT104_Session12_Bai05/FormatName";
import AdminIndex from "../components/PTIT_CNTT04_IT104_Session12_Bai06/AdminIndex";
import UserLayout from "../components/PTIT_CNTT04_IT104_Session12_Bai07/UserLayout";
import Ex8 from "../components/PTIT_CNTT04_IT104_Session12_Bai08/Excercise8";
import TodoListIndex from "../components/PTIT_CNTT04_IT104_Session12_Bai09/TodoListIndex";
export default function App() {
    return (
        <>
            {/* {bai1} */}
            <p>Bai 1:</p>
            <ListCourse></ListCourse>
            {/* bai 2 */}
            <p>bai 2 :</p>
            <Calculation></Calculation>
            {/* bai 3 */}
            <p>Bai 3</p>
            <UserInfo></UserInfo>
            {/* bai 4 */}
            <p>bai 4:</p>
            <ColorBox></ColorBox>
            {/* bai 5 */}
            <p>bai 5:</p>
            <FormatName></FormatName>
            {/* bai 6 */}
            <p>bai 6</p>
            <AdminIndex></AdminIndex>
            {/* bai 7 */}
            <p>bai 7</p>
            <UserLayout></UserLayout>
            {/* bai 8 */}
            <p>bai 8</p>
            <Ex8></Ex8>
            {/* bai 9 */}
            <p>bai 9</p>
            <TodoListIndex></TodoListIndex>
            {/* bai 10 */}
            <p>bai 10</p>
        </>
    );
}
