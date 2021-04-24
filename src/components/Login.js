import React from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core"
function Login() {
  const login=() =>{
    window.location.href ="./login"
  }
  return (
    <Container>
      <Content>
        <LoginBackground>
          <Icon src="/images/icon.png" />
          <Signup color="primary" variant="contained" onClick ={login}>GET ALL THERE</Signup>
          <Decription>
            Et hendrerit cubilia rutrum. A parturient luctus ridiculus etiam.
            Augue. Sollicitudin varius mi scelerisque primis. Nascetur ridiculus
            feugiat quam elementum. Et hendrerit cubilia rutrum. A parturient
            luctus ridiculus etiam. Augue. Sollicitudin varius mi scelerisque
            primis. Nascetur ridiculus feugiat quam elementum.
          </Decription>
          <Logos src='/images/scale.png'/>
        </LoginBackground>

        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.section`
  overflow: hidden;
  width: 100%;
  position: relative;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100vh;
`;
const Content = styled.div``;
const BgImage = styled.img`
  z-index: -1;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/bgimg.jpg");
  opacity: 0.3;
`;

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: cneter;
  max-width: 650px;
  flex-wrap: wrap;
  margin-bottom: 2vw;
  text-align: center;
  margin-left: auto;
  margin-left: auto;
  opacity: 0.8;
  transition: opacity 0.2s;
  transition-timing-function: ease-out;
`;
const Icon = styled.img`
  width: 100%;
  max-width: 600px;
  width: 100%;
  margin-bottom: 12px;
`;
const Signup = styled(Button)`



  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
 

`;
const Decription = styled.p`
  font-size: 11px;
  color: white;

  line-height:1.5;
  margin-bottom:12px;
`;
const Logos = styled.img`
width: 100%;
vertical-align: bottom;
margin-top:20px;
`