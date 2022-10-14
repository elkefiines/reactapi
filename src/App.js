import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import Info from "./components/Info/Info";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(result.data);
      setUsers(result.data);
    };

    getData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/info/:name" element={<Info users={users} />} />
      </Routes>
    </>
  );
}

export default App;
