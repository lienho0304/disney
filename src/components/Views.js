
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
function Views() {
    var settings = {
      autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
      autoplaySpeed: 2000,
  
      
      };
    return (
     
                <Carosel {...settings}>
     
      <Wrap>
        <Link>
          <img src="https://pbs.twimg.com/media/D2jvOdmUgAALnnx.jpg:large" />
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="http://pm1.narvii.com/7252/748361fef300f756138ccbfcaafb5d07b71148fbr1-1300-867v2_uhq.jpg" />
        </Link>
      </Wrap>
      <Wrap>
        <Link>
          <img src="https://i5.walmartimages.com/asr/604725b8-9234-4f3f-98db-cc95131e4cdf_1.f89a63d45ebb475ac0ec7359b390f0d5.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff" />
        </Link>
      </Wrap>
    </Carosel>
        
    )
}

export default Views
const Carosel = styled(Slider)`
 max-width:650px;
  height: 50vh;
  z-index: 1000;
  margin-left:auto;
  margin-top: 100px;
  margin-right:auto
 
`;
const Wrap = styled.div`

  border-radius:10px;
  cursor:pointer;
  overflow: hidden;
  position:relative;
  transition:all 250ms ease-in-out;

  height:50vh;
  :hover {
    border:3px solid whitesmoke;
  }

`

const Link =styled.a `
text-align: center;
height:50vh;
display:flex;
justify-content:center;
align-items:center;
 >img {
    
     width:100%;
     object-fit:cover;
   max-width:650px;
  
 

 }
`
