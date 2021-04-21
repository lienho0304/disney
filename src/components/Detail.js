import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";
import Rating from '@material-ui/lab/Rating'

function Detail() {
  const [movies, setmovies] = useState({});
  const [rating,setRating] =useState(0)
  const id = window.location.search.replace("?", "");
  const urlImage = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=53bbbda70531137f811dfa0b5a584909&language=en-US"`
    )
      .then((res) => res.json())
      .then((data) => {
        setmovies(data)
        setRating(data.vote_average/2)
      }
      
     
      
      )
      
  }, []);
console.log(typeof(rating))

  return (
    <Background urlImage={{ background: `${urlImage}${movies.backdrop_path}` }}>
     <h3>{movies.original_title}</h3>
      <DetailFilm>
        <Controls>
          <PlayButton>
            Play <PlayArrowIcon />
          </PlayButton>
          <TrailerButton>
            Trailer <PlayArrowIcon />
          </TrailerButton>
          <Player>
            <span></span>
            <span></span>
          </Player>
        </Controls>
        <Sub>
          Release:{movies.release_date}●Rating:
          <Rating name="half-rating-read" value={`${rating}`} precision={0.5} readOnly />
          
        </Sub>
        <Detailtext>{movies.overview}</Detailtext>
      </DetailFilm>
    </Background>
  );
}

export default Detail;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: relative;
  background-image: url(${(props) => props.urlImage.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-position: center;
h3 {

  position:absolute;
  margin:18%;
font-size:40px;
  color:lightgrey !important;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  @media (min-width:748px) {
    margin:10%;
    font-size:60px;
  }
  :hover {
    color:black!important;
  }
  
}
`;
const Controls = styled.div`
  padding-top: 50vh;
  font-size: 10px !important;
  display: flex;
`;
const PlayButton = styled(Button)`
  flex: 0.11;
  color: white !important;
  border: solid 1px white !important;
  background-color: rgba(0, 0, 0, 0.6) !important;

  :hover {
    background-color: white !important;
    color: black !important;
    transition: all 250ms ease-in-out;
  }
  @media (max-width: 748px) {
    flex: 0.2 !important;
  }
`;
const TrailerButton = styled(Button)`
  margin-left: 15px !important;
  border: solid 1px white !important;
  background-color: white !important;

  :hover {
    color: white !important;
    border: solid 1px white !important;
    background-color: transparent !important;
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  flex: 0.15;
  @media (max-width: 748px) {
    flex: 0.3 !important;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const Player = styled.button`
  border-radius: 50% !important;
  margin-left: 20px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  border: 1px white solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  display: absolute;
  background-color: rgba(0, 0, 0, 0.6) !important;
  :hover {
    background-color: grey !important;
  }
  span {
    background-color: white;
    display: inline-block;
    display: absolute;
    z-index: 3;

    :first-child {
      height: 2px;
      width: 16px;
      transform: translate(7px, 0px) rotate(0deg);
    }
    :nth-child(2) {
      height: 2px;
      width: 16px;
      transform: translate(-8px) rotate(90deg);
    }
  }
`;
const Detailtext = styled.p`
  color: white;
  width: 50%;
  font-family: "Verdana, Geneva, Tahoma, sans-serif";
  @media (max-width: 748px) {
    width: 80%;
    font-size: 16px;
  }
`;
const DetailFilm = styled.div`
  margin-left: 5%;
`;
const Sub = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 13px;
  color: white;

  @media (max-width: 748px) {
    width: 80%;
    font-size: 12px;
  }
`;
