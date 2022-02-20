import React from 'react';
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import {collection,getDocs,addDoc,updateDoc,doc as createDoc} from 'firebase/firestore';
import db from '../Firebase';
import {Link} from 'react-router-dom';
import { setCurrentMovie } from '../store/selectedMovieSlice';
const WatchList = () => {
    let dispatch = useDispatch();
    const [Cards,setCards] = useState([]);
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
    let watchlistData = [];
    const useremail = useSelector(state => state.user.email);
    const removeMovie = async (id) => {
        let newSet = [];
        const docref = collection(db,'users');
        const querySnapshot = await getDocs(docref);
        querySnapshot.forEach(doc => {
            if(doc.data().email === useremail){
                newSet = doc.data().watchlist.filter(item => {
                    if(item !== id){
                        return true;
                    }
                })
                const instDoc = createDoc(db,'users',doc.id);
                updateDoc(instDoc,{watchlist: newSet});
                setCards(Cards);
            }
        })
    }
    useEffect(async () => {
        const docRef = collection(db,'users');
        const querySnapshot = await getDocs(docRef);
        querySnapshot.forEach(async doc => {
            if(doc.data().email === useremail){
                for(let i=0;i<doc.data().watchlist.length;i++){
                    watchlistData = [...watchlistData,doc.data().watchlist[i]];
                }
            }
        }
        );
        let cards = [];
        for(var i=0;i<watchlistData.length;i++){
            const docref = collection(db,'movies');
            const Snapshot = await getDocs(docref);
            Snapshot.forEach(async (doc) => {
                if(watchlistData[i] === doc.id){
                    cards = [...cards,
                        <Wrap key = {i}>
                        <Link to = {'/details/'+doc.id}>
                            <img key = {i} onClick = {() => {onMovieClick({...doc.data()})}} src = {doc.data().cardImg} alt = 'image'></img>
                        </Link>
                            <Info>
                               <div><h1>{doc.data().title}</h1></div>
                                <div><h1>{doc.data().subTitle}</h1></div>
                            </Info>
                            <p onClick={() => removeMovie(doc.id)}>remove</p>
                        </Wrap>
                    ];
                }
            })
        }
        setCards(cards);
    });
    return(
        <PageContent>
            <DisplayItems>
                {Cards.length?Cards:<p class="NotFound">Nothing added in watchlist</p>}
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
    p{
        color:white;
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
const Button = styled.button`
    position:fixed;
    top:70px;
`;
export default WatchList;