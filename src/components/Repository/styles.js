import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
`;

export const Item = styled.div`
  border-bottom: 1px solid #eceff4;
  color: #3b4252;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const Pagination = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h2``;
