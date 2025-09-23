import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import DarkAndLight from "./components/DarkAndLight";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Language from "./components/Language";
import ListMode from "./components/listMode";
import Login from "./components/Login";
import Menu from "./components/Menu";
import RandomNumber from "./components/RandomNumber";
import StudentManger from "./components/StudentManger";


export default function App() {
  return (
    <div>
      <p>Bai 1</p>
      <Counter></Counter>
      <hr />
      <p>Bai 2</p>
      <RandomNumber></RandomNumber>
      <hr />
      <p>Bai 3</p>
      <DarkAndLight></DarkAndLight>
      <hr />
      <p>Bai 4</p>
      <ListMode></ListMode>
      <hr />
      <p>Bai 5</p>
      <Menu></Menu>
      <hr />
      <p>Bai 6</p>
      <Language></Language>
      <hr />
      <p>Bai 7</p>
      <Favorites></Favorites>
      <hr />
      <p>Bai 8</p>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Login></Login>} />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
      <hr />
      <StudentManger></StudentManger>
    </div>
  )
}
