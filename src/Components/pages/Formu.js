import { addDoc, collection } from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from "./../../Config/firebase";
import { useState } from 'react';

const Formu = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    try {
      const linksRef = collection(db, "contacts");
      const res = await addDoc(linksRef, inputs);
      return res;
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="age"  onChange={handleChange} type="text" placeholder="Enter email" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password"  onChange={handleChange} type="text" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}
export default Formu;