import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Components/Container";
import Formu from "./Components/Formu"
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={ <Formu /> }></Route>
          <Route path="*" element={ < NoPage/> } ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
