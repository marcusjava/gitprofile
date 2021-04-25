import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Search = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  color: #3b4252;
  font-size: 2.2rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #3b4252;
`;

export const Button = styled.button`
  background-color: #47525e;
  cursor: pointer;
  color: #eceff4;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.3rem;
  &:hover {
    background-color: #282b2f;
  }
`;
