import styled from 'styled-components';
import React  from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const Recommends = (props) => {
    let cardList = useSelector(state => state.movie.recommend);
    let cards = [];
    if(cardList != null){
    for(let i = 0; i < cardList.length; i++) {
        cards = [...cards,
            <Wrap key = {i} onClick={() => props.onMovieClick({...cardList[i]})}>
                <Link to = {'/details/'+cardList[i].id}>
                    <img src = {cardList[i].cardImg} alt = 'image'></img>
                </Link>
            </Wrap>
        ];
    }
    }

    return(
        <Container>
            <h4>Recommended for you</h4>
            <Content>
            {
                cards
            }
            </Content>
        </Container>
    );
}
const Container = styled.div`
    padding:10px;
`;
const Content = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    @media (max-width:700px){
        grid-template-columns:repeat(2,1fr);
    }
`;
const Wrap =styled.div`
    display:block;
    position:relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 5px solid rgba(249, 249, 249, 0.1);
    margin:5px;
    &:hover{
        transform:scale(1.1);
        border: 3px solid white;
    }
    border-radius:10px;
    img{
        height:100%;
        width:100%;
        border-radius:10px;
    }
`;
export default Recommends;