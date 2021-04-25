import React, { useState } from "react";
import { Home } from "../components";
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

function HomeContainer() {
  const [name, setName] = useState("");

  const history = useHistory();

  const handleClick = () => {
    if (name) {
      history.push(`/profile/${name}`);
    }
  };
  return (
    <Home>
      <Home.Search>
        <Home.Title>Search Devs</Home.Title>
        <Home.Input
          placeholder="Type the username here..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Home.Button onClick={handleClick} disabled={name.length === 0}>
          <i className="fa fa-search"></i>Buscar
        </Home.Button>
      </Home.Search>
    </Home>
  );
}

export default HomeContainer;
