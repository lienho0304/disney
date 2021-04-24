import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
      "& .MuiPaginationItem-outlinedPrimary.Mui-selected": {
        backgroundColor: "white",
        color: "black",
      },
      "& .MuiPaginationItem-rounded": {
        backgroundColor: "#b0a4a4",
      },
      "& .MuiPaginationItem-root": {
        color: "white",
      },
    },
  })
);

export default function Movies() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [movies, setmovies] = useState([]);
  const [checkLoading, setCheckLoading] = useState(true);
  const urlImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=53bbbda70531137f811dfa0b5a584909&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setmovies(data);
        setCheckLoading(false);
      });
  }, [page]);

  const list = movies?.results?.slice(0, 15).map((x) => {
    return (
      <Wrap>
        <Link href={`./details?tv/${x.id}`}>
          <img src={`${urlImage}${x.backdrop_path}`}  alt={x.original_title} />
          <p>{x.original_title}</p>
        </Link>
      </Wrap>
    );
  });

  const onChangePage = (e, page) => {
    setPage(page);
    setCheckLoading(true);
  };

  return (
    <Container>
      <Header/>
      {checkLoading && <LinearProgress />}
      <List>{list}</List>
      <Pagination
        className={classes.root}
        count={10}
        variant="outlined"
        color="primary"
        shape="rounded"
        onChange={(e, page) => onChangePage(e, page)}
      />
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
