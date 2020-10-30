import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (name= "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let response = await axios(url)
        setData(response.data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    fetchData()
  }, [])

  return { data, error, loading }
};

export default useFetch;
