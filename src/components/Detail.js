import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {collection,getDocs,addDoc,updateDoc,doc as createDoc} from 'firebase/firestore';
import db from '../Firebase';
const Detail = (props) => {
    const username = useSelector(state => state.user.name);
    const useremail = useSelector(state => state.user.email);
    console.log('>>>>>',useremail);
    let currMovie = useSelector(state => state.selectedMovie);
    let inner = false;
    let outer = false;
    const findUser = async (info) => {
        const docRef = collection(db,'users');
        const querySnapshot = await getDocs(docRef);
        querySnapshot.forEach(async doc => {
            console.log('*****',doc.data().watchlist);
            if(doc.data().email === useremail){
                    console.log('The user is found');
                	outer = true;
                for(let i = 0; i < doc.data().watchlist.length; i++) {
                    if(doc.data().watchlist[i] === info.id){
                    console.log('The movie has been matched successfully');
                    inner = true;
                    break;
                    }
                }
            }
                if(outer == true && inner == false){
                    // console.log(createDoc,doc.id);
                    const instDoc = createDoc(db,'users',doc.id);
                    await updateDoc(instDoc,{watchlist:[...doc.data().watchlist,info.id]});
                }
            })
            if(outer == false && inner == false){
                await addDoc(docRef,{userName:username,email:useremail,watchlist:[info.id]});
            }
    }
    const addPopUp = () => {
        let m = document.getElementsByTagName('iframe')[0];
        if(m != undefined) {
            m.remove();
            console.log('Im successful at deleting the previously present iframe tag');
        }
        let a = document.getElementsByClassName('popup')[0];
        // let b = <iframe src="https://www.youtube.com/embed/A1XWEmtsy8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
        let b = document.createElement('iframe');
        b.src = currMovie.clipLink;
        b.title = "YouTube video player";
        b.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        // let c = document.createElement("h1");
        // c.appendChild(document.createTextNode("Texting....."));
        console.log('....>>>>',b)
        a.appendChild(b);
    }
    return(
        <Background>
            <img src = {currMovie.backgroundImg}>
            </img>
            <Content>
                <TitleImg>
                <img src={currMovie.titleImg}></img>
                </TitleImg>
                <div class = "popup"></div>
                <Buttons>
                    <Playbutton onClick={addPopUp}>
                        <img src = '../play-icon-black.png' alt='Play '></img>
                        <h2>Play</h2>
                    </Playbutton>
                    <Trailerbutton>
                        <img src = '../play-icon-white.png' alt='Play '></img>
                        <h2>Trailer</h2>
                    </Trailerbutton>
                    <AddWatchList onClick={() => findUser(currMovie)}>
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
    font-size:xx-large;
    flex-direction:column;
    @media (max-width:600px){
        left:5px;
        font-size:medium;
    }
    top:130px;
    // height:30%;
    // width:30%;
    `;
const Buttons = styled.div`
    display:flex;
    width:50%;
    height:7vh;
    flex-direction:row;
    margin-top:30px;
    @media (max-width:600px){
        width:100%;
    }
`;
const Playbutton = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    height: 100%;
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
    height: 100%;
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
   height: 50px;
   width: 50px;
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
    height: 50px;
    width: 50px;
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
    margin-bottom:22px;
`;
const SubTitle = styled.div`
    width:80%;
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width:600px){
        width:100%;
        font-size:medium;
    }

`;
const Description = styled.div`
    width:80%;
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);
    @media (max-width:600px){
        width:100%;
        font-size:medium;
    }
`;
const VideoClip = styled.div`
    // overflow-y:scroll;  
    
    //position:fixed;
    width:30vw;
    height:100%;
`;
export default Detail;