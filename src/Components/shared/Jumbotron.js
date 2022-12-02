import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import { db } from "./../../Config/firebase";

const Jumbotron = () => {
  const [newSite, setNewSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "new"), orderBy("img", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setNewSite(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default Jumbotron;
