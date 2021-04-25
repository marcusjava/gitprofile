import React, { useState, useEffect } from "react";
import ReactPagination from "react-paginate";

// import { Container } from './styles';

function usePagination() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  return <div />;
}

export default usePagination;
