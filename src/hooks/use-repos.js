import React, { useState, useEffect } from "react";
import axios from "axios";

// import { Container } from './styles';

function useRepos(name) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const response = await axios.get(
        `https://api.github.com/users/${name}/repos`
      );
      console.log(response.data);
      setRepos(response.data);
    }
    getRepos();
  }, [name]);

  return { repos };
}

export default useRepos;
