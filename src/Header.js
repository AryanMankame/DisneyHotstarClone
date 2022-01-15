import styled from 'styled-components';
import React from 'react';
const Header = (props) => {
    const handleAuth = () => {
        console.log('Trying to login');
    }
    return (
    <Nav>
    <img src = "logo.svg"></img>
    <NavMenu>
    <a href = '' alt = ''><img src="home-icon.svg"></img><span>HOME</span></a>
    <a href = '' alt = ''><img src = 'search-icon.svg'></img><span>SEARCH</span></a>
    <a href = '' alt = ''><img src='watchlist-icon.svg'></img><span>WATCHLIST</span></a>
    <a href = '' alt = ''><img src = 'original-icon.svg'></img><span>ORIGINALS</span></a>
    <a href = '' alt = ''><img src = 'movie-icon.svg'></img><span>MOVIES</span></a>
    <a href = '' alt = ''><img src = 'series-icon.svg'></img><span>SERIES</span></a>
    </NavMenu>
    <Login onClick = {handleAuth}>LOGIN</Login>
    </Nav>
    )
}
const Nav = styled.nav`
    color:white;
    display:flex;
    height:80px;
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
    @media (max-width:600px){
        display:none;
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
    margin-right:10px;
    transition:1s;
    &:hover{
        background:linear-gradient(to bottom,white,white);
        color:black;
    }
`;
export default Header;