import { addDoc, collection } from "firebase/firestore";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "./../../config/firebase";
import { useState } from "react";

const Formu = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const coment = collection(db, "contacts");
      const res = await addDoc(coment, inputs);
      alert('Se a registrado el el comentario')
      return res;
    } catch (e) {
      console.error("Hubo un error", e);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="nameForm"
          type="text"
          placeholder="Escriba su nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="emailForm"
          type="email"
          placeholder="Correo"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Comentario</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="emailDescription"
          type="text"
          placeholder="Comentario"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};
export default Formu;
