import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
const Detail = (props) => {
    let currMovie = useSelector(state => state.selectedMovie);
    return(
        <Background>
            <img src = {currMovie.backgroundImg}>
            </img>
            <Content>
                <TitleImg>
                <img src={currMovie.titleImg}></img>
                </TitleImg>
                <Buttons>
                    <Playbutton>
                        <img src = '../play-icon-black.png' alt='Play '></img>
                        <h2>Play</h2>
                    </Playbutton>
                    <Trailerbutton>
                        <img src = '../play-icon-white.png' alt='Play '></img>
                        <h2>Trailer</h2>
                    </Trailerbutton>
                    <AddWatchList>
                    <div>+</div>
                    </AddWatchList>
                    <GroupIcon>
                        <img src='../group-icon.png' alt = 'group-icon'></img>
                    </GroupIcon>
                </Buttons>
                <SubTitle>
                <div>{currMovie.subTitle}</div>
                </SubTitle>
                <Description>
                <div>{currMovie.description}</div>
                </Description>
            </Content>
        </Background>
    );
}
const Background = styled.div`
    position:fixed;
    top:60px;
    z-index:-10;
    height:100%;
    width:100%;
    opacity:1;
    img{
        width:100%;
        height:100%;
    }
`;
const Content = styled.div`
    left:30px;
    position:fixed;
    display:flex;
    opacity:1;
    flex-direction:column;
    top:130px;
    // height:30%;
    // width:30%;
    `;
    const Buttons = styled.div`
    display:flex;
    width:50%;
    flex-direction:row;
    margin-top:30px;
`;
const Playbutton = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    height: 8vh;
    padding-left: 14px;
    padding-right: 14px;
    border-radius:8px;
    cursor:pointer;
    &:hover{
        background-color:rgba(255,255,255,0.4);
    }
    img{
        width:20px;
        height:20px;
        padding-right: 4px;
    }
    margin-right:10px;
`
const Trailerbutton = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    height: 8vh;
    padding-left: 14px;
    padding-right: 14px;
    color:white;
    background-color:rgba(0,0,0,0.5);
    border:2px white solid;
    cursor:pointer;
    border-radius:8px;
    img{
        width:20px;
        height:20px;
        padding-right: 4px;
    }
    margin-right:10px;
`
const AddWatchList = styled.div`
   display:flex;
   align-items: flex-start;
   height:50px;
   width:50px;
   justify-content: center;
   border-radius:50px;
   border:2px solid white;
   color:white;
   background-color:rgba(0,0,0,0.5);
   font-size:xx-large;
   margin-right:10px;
`;
const GroupIcon = styled.div`
    display:flex;
    align-items: flex-start;
    height:50px;
    width:50px;
    justify-content: center;
    border-radius:50px;
    background-color:rgba(0,0,0,0.5);
    border:2px solid white;
    margin-right:10px;
`;
const TitleImg = styled.div`
    display:flex;
    width:100%;
    justify-self:start;
    align-self:center;
    img{
        height:28vh;
        width:35vw;
    }
    margin-right:10px;
`;
const SubTitle = styled.div`
    width:80%;
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
`;
const Description = styled.div`
    width:80%;
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
`;
export default Detail;