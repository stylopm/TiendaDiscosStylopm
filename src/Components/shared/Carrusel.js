import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import { db } from "./../../config/firebase";

const Carrusel = () => {
  const [newsSite, setNewsSite] = useState([]);

  // Ciclo de vida component
  useEffect(() => {
    const q = query(collection(db, "itemsCarrusel"));
    onSnapshot(q, (querySnapshot) => {
      setNewsSite(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);
  return (
    <Carousel>
      {newsSite.map((items) => (
        <Carousel.Item>
          <img className="d-block" src={items.data.img} alt="First slide" />
          <Carousel.Caption>
            <h3>{items.data.title}</h3>
            <p>{items.data.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Carrusel;
