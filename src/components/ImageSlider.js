import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const ImageSlider = (props) => {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay:true,
    }
    return(
    <Carousel {...settings}>
        <Wrap>
            <a>
                <img src = 'slider-badag.jpg' alt = '' />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src = 'slider-badging.jpg' alt = '' />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src = 'slider-scale.jpg' alt = '' />
            </a>
        </Wrap>
        <Wrap>
            <a>
                <img src = 'slider-scales.jpg' alt = '' />
            </a>
        </Wrap>
    </Carousel>
    );
}
const Carousel = styled(Slider)`
    z-index:1;
    diplay:flex;
    &:hover{
        & > button {
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }
    & > button {
        opacity:0;
        width:5vw;
        height:100%;
        z-index:2;
    }
    ul li button {
        &:before{
        color:grey;
        font-size:10px;
        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-prev{
        left:-30px;
    }
    .slick-next{
        right:-30px;
    }
    .slick-list{
        overflow:scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`
const Wrap = styled.div`
    border-radius:4px;
    cursor:pointer;
    position:relative;
    a {
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        img{
            width:100%;
            padding:4px;
        }
        &:hover{
            border:2px solid white;
        }
    }
`
export default ImageSlider;