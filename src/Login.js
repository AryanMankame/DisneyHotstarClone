import styled from 'styled-components';
import React from 'react';
const Login = (props) => {
    return (
        <Container>
        <Content>
        <Logo src = "cta-logo-one.svg" alt = ""/>
        <Signup>GET ALL THERE</Signup>
        <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
             As of 03/26/22, the price of Disney+ and The Disney Bundle will increase by $1.        </Description> 
        <BottomLogo src = "cta-logo-two.png" alt = ""/>
        </Content>
        </Container>
      );
}
const Container = styled.div`
  color:white;
  font-size:2rem;
  display:flex;
  justify-content:center;
  height:100vh;
  width:100vw;
  align-items:center;
  background-image:url("login-background.jpg");
  background-size:cover;
  z-index:-1;
`;
const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  max-width:650px;
`;
const Logo = styled.img`
  margin-bottom:30px;
  align-self:center;
  max-width:600px;
  width:100%;
`;
const Signup = styled.a`
  align-self:center;
  display:flex;
  color:white;
  height:5vh;
  width:90%;
  font-size:3vh;
  font-weight:bold;
  background-color:#0063e5;
  justify-content:center;
  word-spacing:0.6rem;
  border-radius:5px;
  padding:.6em;
  align-items:center;
  cursor:pointer;
  &:hover{
    background-color:#0483ee;
  }
`;
const Description = styled.p`
font-family:'Luxurious Roman';
font-size:12px;
margin:20px 0 10px 10px;
letter-height:1.5rem;
word-spacing:.2rem;
padding:1px;
`;
const BottomLogo = styled.img`
margin-top:10px;
height:5vh;
`
export default Login;