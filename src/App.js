import React from "react";
import "./styles.css";
import useFetch from "./useFetch";
import MovieList from "./MovieList";
import Header from "./Header";

export default function App() {
  const { movieArr, isError, isLoading } = useFetch();

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "blue",
          width: "100VW",
          height: "50px",
          marginBottom: "20px"
        }}
      >
        <Header />
      </div>
      <MovieList />
    </div>
  );
}
