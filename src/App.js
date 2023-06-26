import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/pages/Login";
import Home from "./Components/pages/Home";
import Mapmap from "./Components/pages/Map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
