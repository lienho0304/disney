import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Search() {
  const [movies, setmovies] = useState([]);
  const urlImage = "https://image.tmdb.org/t/p/original";
  const id=window.location.search.replace("?","")

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=53bbbda70531137f811dfa0b5a584909&language=en-US&query=${id}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => setmovies(data));
  });
  console.log(movies)
  const list = movies?.results?.map((x) => {
      if (x.backdrop_path)
    return (<Wrap>
      <Link href ={`./details?movie/${x.id}`}>
        <img src={`${urlImage}${x.backdrop_path}`} alt={x.original_title?x.original_title:x.original_name} />
        <p>{`${x.original_title?x.original_title:x.original_name}`}</p>
        
      </Link>
    </Wrap>)
  });
  return (
    <Container>
      <Header/>
      <List>{ list }</List>
    </Container>
  );
}
const Container = styled.div`
  margin: 6em 1em;
`;


const List = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Wrap = styled.div`
  position: relative;
  height: 50vh;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms ease-in-out;
  border: 3px solid grey;

  transform: scale(1);
  @media (min-width: 768px) {
    margin: 0;
    height: 150px;
    
  }

  :hover {
    border: 4px solid whitesmoke;
    transform: scale(1.05);
    video {
      opacity: 1;
    }
  
  }
`;

const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  max-width: 500px;
  > img {
    width: 100%;
    max-width: 650px;
    z-index: 1;
    height: 100%;
  }
  > video {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    opacity: 0;
  }
  >p {
    position:absolute;
    z-index:20000;
    margin-top:40%;
    
    @media (max-width:748px) {
      margin-top:60%
    }
  }
`;