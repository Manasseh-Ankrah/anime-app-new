import React from "react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { RotatingLines } from "react-loader-spinner";

const MovieList = () => {
  const { movieArr, isError, isLoading } = useFetch();

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <MovieCard />
      )}

      {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}
    </div>
  );
};

export default MovieList;
