import React, {useState} from 'react';

import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Load from "./component/Load";
import Card from   "./component/Card";
 
function App() {
  const [fetchData, setfetchData] = useState(false);
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async () => {
      setLoad(true);
      const response = await fetch('https://reqres.in/api/users?page=1');
      const res = await response.json();
      setUsers(res.data);
      setInterval(() => {
          setfetchData(true);
       }, 2000);
  };

  return (
      <>
          <Navbar getData={getData} />

          {load ? (
              fetchData ? (
                  <Card users={users} />
              ) : (
                  <Load />
              )
          ) : (
              <Home getData={getData} />
          )}
      </>
  );
}


export default App;