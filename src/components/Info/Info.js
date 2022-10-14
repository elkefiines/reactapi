import React from "react";
import "./Info.css";
import { useParams, useNavigate } from "react-router-dom";
const Info = ({ users }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const user = users.find((el) => el.name === name);
  const onClick = () => navigate("/");
  return (
    <div className="info">
      <div className="container">
        <h2>{user.name}</h2>
        <h4>{user.company.name}</h4>
        <p>{user.company.catchPhrase}</p>
        <p>{user.email}</p>
        <h2 onClick={onClick}>Go back</h2>
      </div>
    </div>
  );
};

export default Info;
