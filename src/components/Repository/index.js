import React from "react";
import { Container, Item, Stats, Pagination, Link } from "./styles";

// import { Container } from './styles';

function Repository({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Repository.Item = function ({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};

Repository.Title = function ({ children, ...props }) {
  return <h2>{children}</h2>;
};

Repository.Description = function ({ children, ...props }) {
  return <p {...props}>{children}</p>;
};

Repository.Stats = function ({ children, ...props }) {
  return <Stats {...props}>{children}</Stats>;
};

Repository.Link = function ({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Repository.Stars = function ({ children, ...props }) {
  return <span {...props}>{children}</span>;
};

Repository.Pagination = function ({ children, ...props }) {
  return <Pagination {...props}>{children}</Pagination>;
};

Repository.UpdatedAt = function ({ children, ...props }) {
  return <p>{children}</p>;
};

export default Repository;
