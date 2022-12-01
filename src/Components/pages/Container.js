import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <Header />
        {/* Inserta cada pagina dependiendo de la navegación */}
        <Outlet /> 
      <Footer />
    </>
  );
};
export default Container;
