import "./styles.css";
import LockScreen from "./components/lockscreen/lockscreen";
import Main from "./main";
import Slide from "./components/lockscreen/slideToUnlock";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Slide />} /> */}
      <Route path="/" element={<Main />} />
      {/* <Route path="/lockscreen" element={<LockScreen />} /> */}
    </Routes>
  );
}
