import React, { useState } from "react";
import { Home } from "../components";
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

function HomeContainer() {
  const [name, setName] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/profile/${name}`);
  };
  return (
    <Home>
      <Home.Search>
        <Home.Title>Search Devs</Home.Title>
        <Home.Form onSubmit={handleSubmit}>
          <Home.Input
            required
            placeholder="Type the username here..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Home.Button type="submit">
            <i className="fa fa-search"></i>Buscar
          </Home.Button>
        </Home.Form>
      </Home.Search>
    </Home>
  );
}

export default HomeContainer;
