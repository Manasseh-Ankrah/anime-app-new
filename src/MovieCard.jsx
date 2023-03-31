import React from "react";
import useFetch from "./useFetch";

const MovieCard = () => {
  const { movieArr, isError, isLoading } = useFetch();
  console.log(" Movie Data =>> ", movieArr);
  // console.log(" lOADING State =>> ", isLoading);
  // console.log(" Error State=>> ", isError);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {movieArr.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  height: "340px",
                  width: "330px"
                }}
              />
              <h3
                style={{
                  padding: "20px",
                  width: "300px",
                  color: "black",
                  fontSize: "20px"
                }}
              >
                {movie.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
