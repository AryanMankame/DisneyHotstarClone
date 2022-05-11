import styled from 'styled-components';
import React from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {auth,provider} from './Firebase.js';
import {useDispatch,useSelector} from 'react-redux';
import {signInWithPopup} from 'firebase/auth';
import {setLoginUserDetails,setSignOutState} from './store/userSlice';
import {Link} from 'react-router-dom';
const Header = (props) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector(state => state.user.name);
    const userphoto = useSelector(state => state.user.photo);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history('/home');
            }
        })
    },[username]
    );
    const handleAuth = () => {
        signInWithPopup(auth,provider).then(result => {
            setUser(result.user);
        }).catch(err => {console.log("An error is faced : " + err)});
    }
    const signOut = () => {
        const p = auth.signOut();
        p.then(() => {
            dispatch( setSignOutState() );
            history('/');
        });
    }
    const setUser = (user) => {
        dispatch(
            setLoginUserDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            )
        )
    }
    
    return (
    <Nav>
    <img src = "logo.svg"></img>
    {username ?
    <div className="logOut">
    <NavMenu>
    <NavOptions>
    <a href = '' alt = '' id="homeIcon"><img src="home-icon.svg"></img><span>HOME</span></a>
    <Link to = "/search" ><a href = '' alt = '' id="searchIcon"><img src = 'search-icon.svg'></img><span>SEARCH</span></a></Link>
    <Link to = "/watchlist" ><a href = '' alt = '' id = "watchlistIcon"><img src='watchlist-icon.svg'></img><span>WATCHLIST</span></a></Link>
    <a href = '' alt = '' id="originalIcon"><img src = 'original-icon.svg'></img><span>ORIGINALS</span></a>
    <a href = '' alt = '' id="movieIcon"><img src = 'movie-icon.svg'></img><span>MOVIES</span></a>
    <a href = '' alt = '' id="seriesIcon"><img src = 'series-icon.svg'></img><span>SERIES</span></a>
    </NavOptions>
    <SignOut>
        <img className = "userimg " src = {userphoto} alt ={username} onClick={signOut}/>
        <div className = "signOuthover" onClick = {signOut}>SignOut</div>
    </SignOut>
    </NavMenu>    
    </div>:
    <Login onClick = {handleAuth} className="logOut">LOGIN</Login>
    }
    </Nav>
    )
}
const Nav = styled.nav`
    color:white;
    display:flex;
    height:60px;
    z-index:7;
    position:fixed;
    background:linear-gradient(to bottom, #141b29, #0c111b 300px);
    width:100vw;
    align-items:center;
    img{
        height:80%;
        padding:5px 5px 5px 5px;
    }
`
const NavMenu = styled.div`
    display:flex;
    flex-wrap:nowrap;
    align-items:center;
    a{
    padding:0px 12px;
    text-decoration:none;
    display:flex;
    img{
        width:20px;
        height:20px;
    }
    span{
        color:white;
        padding:2px 0px;
        display:flex;
        flex-direction:column;
        
    }
    span::after{
        content:'';
        height:3px;
        z-index:2;
        background-color:white;
        opacity:0;
        left:0px;
        transform-origin:left center;
        visibility:hidden;
        transform:scaleX(0);
        transition-property:opacity transform;
        transition-duration:.5s;
        transition-delay-function:cubic-bezier(0.25,.46,.45,.94);
    }
    span:hover:after{
        transform:scaleX(1);
        opacity:1;
        visibility:visible;
    }
    }
`;
const Login = styled.a`
    display:flex;
    align-items:center;
    background:linear-gradient(to bottom, #141b29, #0c111b 300px);
    margin-left:auto;
    border:solid white 1px;
    padding:2px 0px;
    width:70px;
    height:30px;
    border-radius:5px;
    justify-content:center;
    transition:1s;
    &:hover{
        background:linear-gradient(to bottom,white,white);
        color:black;
    }
`;
const SignOut = styled.div`
    height:50px;
    width:50px;
    margin-left:auto;
    &:hover{
        div{
            visibility:visible;
        }
    }
`;
const NavOptions = styled.div`
    display:flex;
    span{
        margin-top:4px;
    }
    @media (max-width:800px){
       a{
           padding:0px;
           font-size:x-small;
           img{
               height:15px;
               width:15px;
           }
       }
       #movieIcon,#originalIcon,#seriesIcon{
           display:none;
       }
    }
`;
export default Header;
