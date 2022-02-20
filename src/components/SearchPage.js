import React from 'react';
import styled from 'styled-components';
import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { setCurrentMovie } from '../store/selectedMovieSlice';
import db from '../Firebase';
import {Link} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
let searchlist = [];
const SearchPage = (props) => {
    let dispatch = useDispatch();
    let [input,setInput] = useState("");
    let movielist = [];
    useEffect(async () => {
        const docRef = collection(db,'movies');
        const querySnapshot = await getDocs(docRef);
        querySnapshot.docs.forEach((doc) => {
            movielist = [...movielist,{id:doc.id,...doc.data()}];
        });
        let searchList = movielist.filter(item => {
            if(item.title.toLowerCase().includes(input.toLowerCase())){ 
                console.log(input,' ',item.title);
                return item;
            }
        });
        searchlist = searchList;
    });
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
    let cards = [];
    console.log('?????>>>>',searchlist); 
    if(searchlist != null){
        for(let i = 0; i < searchlist.length; i++) {
            cards = [...cards,
                <Wrap>
                    <Link to = {'/details/'+searchlist[i].id}>
                        <img key = {i} onClick = {() => {onMovieClick({...searchlist[i]})}} src = {searchlist[i].cardImg} alt = 'image'></img>
                    </Link>
                        <Info>
                           <div><h1>{searchlist[i].title}</h1></div>
                            <div><h1>{searchlist[i].subTitle}</h1></div>
                        </Info>
                </Wrap>
            ];
        }
        }
    return(
        <PageContent>
            <SearchBox>
            <input type="text" placeholder="Search" onInput = {(event) => { setInput(event.target.value)}}>
            </input>
            </SearchBox>
            <DisplayItems>
                {cards.length?cards:<p class="NotFound">Search not Found</p>}
            </DisplayItems>
        </PageContent>
    );
};
const PageContent = styled.div`
    position:fixed;
    top:60px;
    background: linear-gradient(to bottom, #141b29, #0c111b 300px);
    height:100%;
    width:100%;
    .NotFound{
        width:100%;
        display:flex;
        color:white;
        justify-content:center;
    }
`;
const SearchBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    justify-content:center;
    width:100%;
    input{
        height:4vh;
        width:40vw;
        font-size:x-large;
        margin-left: auto;
        margin-right: auto;
        align-item:center;
        @media (max-width:800px){
            font-size:small;
        }
    }
    input:focus {
        border-color: #66afe9;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
        outline: 0 none;
    }
`;
const DisplayItems = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Wrap = styled.div`
    display:flex;
    flex-direction:row;
    border:2px solid white;
    border-radius:15px;
    padding:5px;
    margin:10px;
    margin-right:auto;
    margin-left:auto;
    img{
        height:200px;
        width:200px;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    font-size:small;
    @media (max-width:800px){
        font-size:xx-small;
    }
`;
export default SearchPage;