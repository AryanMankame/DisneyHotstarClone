import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Recommends from './Recommends';
import Viewers from './Viewers';
import NewDisney from './NewDisney';
import Original from './Original';
import Trending from './Trending';
import db from '../Firebase';
import { collection, getDocs } from "firebase/firestore";
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setMovies} from '.././store/Movie';
import { setCurrentMovie } from '../store/selectedMovieSlice';
import './Home.css';
const styles = {
    color:'red',
    transform:'translateY(170px)',
}
const Home = (props) => {
    const userName = useSelector(state => {return state.user.name});
    let recommends = [];
    let newDisney = [];
    let original = [];
    let trending = [];
    const dispatch = useDispatch();
    useEffect(async () => {
        const docRef = collection(db,'movies');
        const querySnapshot = await getDocs(docRef);
        querySnapshot.docs.forEach((doc) => {
            const checktype = doc.data().type;
            switch(checktype){
                case 'recommend':
                    {
                    recommends = [...recommends,{id:doc.id,...doc.data()}];
                    break;
                    }
                case 'new':
                    {
                    newDisney = [...newDisney,{id:doc.id,...doc.data()}];
                    break;
                    }
                case 'original':
                    {
                    original = [...original,{id:doc.id,...doc.data()}];
                    break;
                    }
                case 'trending':
                    {
                    trending = [...trending,{id:doc.id,...doc.data()}];
                    break;
                    }
            }
        });
        dispatch(setMovies({
        recommend:recommends,
        newDisney:newDisney,
        original,
        trending
    }));
    })
    const onMovieClick = (data) => {
        dispatch(setCurrentMovie({
            id: data.id,
            backgroundImg: data.backgroundImg,
            cardImg: data.cardImg,
            description: data.description,
            subTitle: data.subTitle,
            title: data.title,
            titleImg: data.titleImg,
            type: data.type,
            trailerLink: data.trailerLink,
            clipLink: data.clipLink
        }))
    }
    return(
        <Component>
        <ImageSlider />
        <Viewers />
        <Recommends onMovieClick={onMovieClick} />
        <NewDisney onMovieClick={onMovieClick}/>
        <Original onMovieClick={onMovieClick}/>
        <Trending onMovieClick={onMovieClick}/>
        </Component>
    );
}
const Component = styled.div`
    & > div{
        color:white;
    }
    position:relative;
    top:60px;
    min-height:calc(100vh - 250px);
    background:url('./home-background.png');
    // background-color:blue;
    background-repeat:no-repeat;
`;
export default Home;