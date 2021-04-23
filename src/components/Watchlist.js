import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Watchlist() {
  const [films, setFilms] = useState([]);
 
  useEffect(() => {
    let films = JSON.parse(localStorage.getItem("films"));
    setFilms(films);
  }, []);

  let list = films.map((film) => 
 
      (
    <Wrap>
      <Link href={`/details?${film.id}`}>
        <img src={`${film.image}`} />
        <p>{film.name}</p>
      </Link>
    </Wrap>
  ));
  return <List>{list}</List>;
}

export default Watchlist;

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
    height: 180px;
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
  > p {
    position: absolute;
    z-index: 20000;
    margin-top: 40%;
    @media (max-width: 748px) {
      margin-top: 60%;
    }
  }
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