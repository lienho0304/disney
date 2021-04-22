import React, { useState } from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import MovieIcon from "@material-ui/icons/Movie";
import { Button, Input } from "@material-ui/core";
import { auth, provider } from "../firebase";
import TextField from "@material-ui/core/TextField";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function Header() {
  const [inputValue, setInputValue] = useState("");
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
onsubmit =(e) =>{
e.preventDefault()
window.location.href=`/search?${inputValue}`
}
  return (
    <Nav>
      <DisneyLogo src="/images/disney.png" />
      <NavMenu>
        <a href="./home">
          <HomeOutlinedIcon />
          <span>Home</span>
        </a>

        <a href="./watchlist">
          <AddOutlinedIcon />
          <span>watchlist</span>
        </a>
        <a href="./original">
          <StarOutlinedIcon />
          <span>original</span>
        </a>
        <a href="./movies">
          <MovieIcon />
          <span>movie</span>
        </a>
        <a href="./series">
          <GroupWorkIcon />
          <span>series</span>
        </a>
       
         
        
        <form onSubmit ={onsubmit}>
        <button  type="submit" value="Submit"><SearchOutlinedIcon style ={{color:"white"}} /></button> 
        <InputSearch  
     onChange={(e)=>{setInputValue(e.target.value)}}
     value ={inputValue}
     
        />
        </form>
      </NavMenu>
      <LoginButton variant="outlined" onClick={signIn}>
        login
      </LoginButton>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  z-index: 3;

  height: 70px;
  align-items: center;
  padding: 0 36px;
`;
const DisneyLogo = styled.img`
  height: 100%;
`;
const LoginButton = styled(Button)`
  text-transform: uppercase;
  color: white !important;
  border: solid 1px white !important;
  :hover {
    background-color: white !important;
    color: black !important;
    transition: all 250ms ease-in-out;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-left: 20px;
  margin-right: auto;
  button {
    background-color:transparent;
 
  
    border :black;
    cursor: pointer;

  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    span {
      letter-spacing: 1.42;
      font-size: 15px;
      text-transform: uppercase;
      margin-left: 10px;
      position: relative;
      &:before {
        background-color: white;
        bottom: -6px;
        content: "";
        left: 0px;
        height: 2px;
        position: absolute;
        width: 100%;
        transform: scale(0);
        transition: all 200ms ease-in-out;
        transform-origin: center left;
      }
    }
    :hover {
      span:before {
        transform: scale(1);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const InputSearch=styled.input`
color:white;
border:solid black 1px;;
background-color:transparent;
:hover {
  border-bottom:1px white solid;
}

;
`
