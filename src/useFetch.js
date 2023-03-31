import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const url = "https://api.consumet.org/anime/9anime/demon?page=2";
  const [movieArr, setMovieArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchApi = async () => {
    try {
      const movies = await await axios.get(url, { params: { page: 2 } });
      // console.log(movies.data.results);
      // console.log(movies.data.results[1].title);
      // console.log(movies.data.results[1].image);
      setMovieArr(movies.data.results);
      setIsLoading(false);

      // return data;
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      // throw new Error(err.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { movieArr, isLoading, isError };
};

export default useFetch;
