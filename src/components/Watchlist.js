import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import {Button} from '@material-ui/core'
import Header from "./Header";
function Watchlist() {
  const [films, setFilms] = useState([]);
 const DeleteItem =(item) =>{
let deletefim =films.find(film=>film.id===item.id)
let indexfim =films.indexOf(deletefim)
  films.splice(indexfim,1)
  setFilms(films)

  localStorage.setItem("films", JSON.stringify(films))

 }
  useEffect(() => {
    let films = JSON.parse(localStorage.getItem("films"));
    setFilms(films);
  }, [films]);

  let list = films.map((film) => 
 
      (
        
    <Wrap>
      <Link >
        <img src={`${film.image}`} alt={film.name}/>
      
    
      </Link>
       <div>
         <Button color="secondary" size="large" onClick={()=>DeleteItem(film)} >< DeleteIcon fontSize="large" /></Button>
         <Button color="primary" size="large" onClick ={()=>{window.location.href=`/details?${film.id}`}}><InfoIcon fontSize="large" /></Button>
       </div>
 
    </Wrap>
   
  ));
  return (
    <div>
    <Header/>
      <List>{list}</List>
  </div>
  )

  
;
}

export default Watchlist;

const Wrap = styled.div`
  position: relative;
  border-radius: 10px;
  object-fit: contain;
  cursor: pointer;
justify-content:center;
display:flex;
align-items:center;
  position: relative;
  transition: all 250ms ease-in-out;
  border: 3px solid grey;

  transform: scale(1);


  :hover {
    border: 4px solid whitesmoke;
    transform: scale(1.05);
   div {
     opacity:1
   }
   
  }
  div {
    position:absolute;
z-index:100;
opacity:0
  }

`;

const Link = styled.a`
  text-align: center;

  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  max-width: 500px;
  > img {
    height:100%;
    width:100%;
    max-width: 650px;
    z-index: 1;

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
 display:grid;
 display: inline-grid;
gap :25px;
grid-template-columns: repeat(2, 1fr);
@media (max-width: 748px) {
  grid-template-columns: repeat(1, 1fr)
    }

`;
