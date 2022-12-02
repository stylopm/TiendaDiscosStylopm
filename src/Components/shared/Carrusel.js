import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import { db } from "./../../Config/firebase";

const imagen = "TiendaDiscosStylopm/img/album.jpg";

const Carrusel = () => {
  const [newsSite, setNewsSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("img", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setNewsSite(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <Carousel>
        {newsSite.map((news) => (
          <Carousel.Item>
            <img className="d-block" src={news.data.img} alt="First slide" />
            <Carousel.Caption>
              <h3>{news.data.title}</h3>
              <p>{news.data.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default Carrusel;
