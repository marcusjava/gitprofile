import { useState, useEffect } from "react";
import axios from "axios";

// import { Container } from './styles';

function useProfile(name) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProfile() {
      try {
        const profileData = await axios.get(
          `https://api.github.com/users/${name}`
        );
        const reposData = await axios.get(
          `https://api.github.com/users/${name}/repos`
        );

        setProfile({
          ...profileData.data,
          repos: reposData.data.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          ),
        });
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    getProfile();
  }, [name]);

  return { profile, loading, error };
}

export default useProfile;
