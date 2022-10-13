import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
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
  },[]);
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
