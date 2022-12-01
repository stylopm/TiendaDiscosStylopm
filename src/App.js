import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import  Address from "./Components/pages/Address"
import Container from "./Components/pages/Container";
import Formu from "./Components/pages/Formu";
import Home from "./Components/pages/Home";
import NoPage from "./Components/pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path="contacto" element={<Formu />}></Route>
          <Route path="direccion" element={<Address />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
