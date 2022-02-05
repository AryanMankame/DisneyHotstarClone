import React from 'react';
import styled from 'styled-components';
const Viewers = (props) => {
    return(
        <Container>
        <Wrap>
            <video autoPlay loop={true} playsInline={true}>
                <source src='clip-disney.mp4' type = 'video/mp4'/>
            </video>
            <img src = 'viewers-disney.png' alt ='disey'/>
        </Wrap>
        <Wrap>
            <video autoPlay loop={true} playsInline={true}>
                <source src='clip-marvel.mp4' type = 'video/mp4'/>
            </video>
            <img src = 'viewers-marvel.png' alt ='marvel'/>
        </Wrap>
        <Wrap>
            <video autoPlay loop={true} playsInline={true}>
                <source src='clip-national-geographic.mp4' type = 'video/mp4'/>
            </video>
            <img src = 'viewers-national.png' alt =''/>
        </Wrap>
        <Wrap>
            <video autoPlay loop={true} playsInline={true}>
                <source src='clip-pixar.mp4' type = 'video/mp4'/>
            </video>
            <img src = 'viewers-pixar.png' alt =''/>
        </Wrap>
        <Wrap>
            <video autoPlay loop={true} playsInline={true}>
                <source src='clip-star-wars.mp4' type = 'video/mp4'/>
            </video>
            <img src = 'viewers-starwars.png' alt =''/>
        </Wrap>
        </Container>
    );
}
const Container = styled.div`
    margin-top:40px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    @media (max-width:700px){
        flex-direction:column;
        & > div{
            width:90%;
            height:50vw;
            justify-content:center;
        }
    }

`;
const Wrap = styled.div`
    border-radius:5px;
    position:relative;
    height:16vh;
    width:18vw;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    margin-bottom:20px;
    margin-right:0px;
    cursor:pointer;
    img{
        inset:0px;
        display:block;
        position:absolute;
        object-fit:cover;
        z-index:1;
        height:100%;
        width:100%;
    }
    video{
        z-index:-1;
        top:0px;
        object-fit:cover;
        height:100%;
        width:100%;
        opacity:0;
    }
    &:hover{
        transform:scale(1.1);
        video{
        opacity:1;
        }
    }
`;
export default Viewers;