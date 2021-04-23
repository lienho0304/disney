import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function TrendingMovies() {

  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3 ,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  const [movies, setmovies] = useState([]);
  const urlImage = "https://image.tmdb.org/t/p/original";
  console.log(window.location)
  useEffect(() => {
    fetch(
      " https://api.themoviedb.org/3/trending/movie/day?api_key=53bbbda70531137f811dfa0b5a584909"
    )
      .then((res) => res.json())
      .then((data) => setmovies(data));
  }, []);
  const listMovies = movies?.results?.map((x) => {
    return (
      <Wrap>
        <Link href={`./details?movie/${x.id}`}>
          <img src={`${urlImage}${x.backdrop_path}`} />
          <p>{x.original_title}</p>
        </Link>
      </Wrap>
    );



});

 
  return (
      
    <Container>
      <Title>TRENDING MOVIES</Title>
      <List>
        <Carousel {...settings}>{listMovies}</Carousel>
      </List>
    </Container>
   
  );
}
const Container = styled.div`
  margin: 6em 1em;
`;

const Title = styled.p`
  font-size: 1.5em;
  color: white;
`;
const List = styled.div`
  /* margin-top: 30px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } */
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
    video,p {
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
    opacity:0;
  }
`;
const Carousel = styled(Slider)`
  
`
