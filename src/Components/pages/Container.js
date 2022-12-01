import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div className="container-page container">
        <Header />
        {/* Inserta cada pagina dependiendo de la navegación */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Container;
