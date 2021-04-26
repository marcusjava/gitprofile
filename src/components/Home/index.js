import React from "react";

import { Container, Title, Button, Input, Search } from "./styles";

//Title Search
//Input search
//Button

function Home({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Home.Title = function ({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Home.Form = function ({ children, ...props }) {
  return <form {...props}>{children}</form>;
};

Home.Search = function ({ children, ...props }) {
  return <Search {...props}>{children}</Search>;
};

Home.Input = function ({ ...props }) {
  return <Input {...props} />;
};

Home.Button = function ({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

export default Home;
