import React from 'react'
import styled from 'styled-components'

function Series() {
    return (
        <div>
            <Container>
            <Wrap>
        <Link>


         
        </Link>
      </Wrap>

            </Container>
        </div>
    )
}

export default Series
const Container =styled.div``
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
  margin: 60px;
  transform:scale(1);
  @media (min-width: 768px) {
    margin: 0;
    height: 150px;
  }

  :hover {
    border: 4px solid whitesmoke;
    transform:scale(1.05);
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


`;