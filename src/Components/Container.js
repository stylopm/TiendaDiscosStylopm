import {collection, onSnapshot, orderBy, query} from "firebase/firestore"
import {useEffect, useState} from 'react'

import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import {db} from './../Config/firebase'

const Container = () => {
  console.log('---------');
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'pokemons'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      console.log('---querySnapshot---');
      console.log(querySnapshot);
      // setTasks(querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   data: doc.data()
      // })))
    })
  },[])


  return (
    <>
      <div className="container container-page">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Container;
