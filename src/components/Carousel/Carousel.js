import React from 'react'
import styled, {css} from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/slide-hello.jpg"
import slide2 from "../../assets/images/slide-circle.jpg"
import slide3 from "../../assets/images/slide-play.jpg"
import './dots.scss'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

`

const sliderStyle = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
`

const Slide = styled.div`
    ${sliderStyle}
    background-image: url(${slide1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

const Slide2 = styled.div`
    ${sliderStyle}
    background-image: url(${slide2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

const Slide3 = styled.div`
    ${sliderStyle}
    background-image: url(${slide3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

const Content = styled.div`
    height: 100vh;
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 17%;
    justify-content: center;
    h1 {
        font-size: 55px;
        line-height: .9;
        margin-bottom: 20px;
    }

    p {
        line-height: 1.3;
        font-size: 12px;
    }

`

const NextArrow =(props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", right: '30px', zIndex: '10' }}
      onClick={onClick}
    />
  );
}

const PrevArrow =(props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", left: '30px', zIndex: '10'  }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      autoplay: true
    };

    return (
        
        <Wrapper>
            <Slider {...settings}>
                <Slide>
                    <Content>
                        <h1>lorem <br/> ipsum.</h1>
                        <p>Consectetur adipiscing elit. <br />
                        Nulla condimentum tortor sem,<br />
                        in semper nisl bibendum eu.</p>
                    </Content>
                </Slide>
                <Slide2>
                    <Content>
                        <h1>lorem <br/> ipsum</h1>
                        <p>Consectetur adipiscing elit. <br />
                        Nulla condimentum tortor sem,<br />
                        in semper nisl bibendum eu.</p>
                    </Content>
                </Slide2>
                <Slide3>
                    <Content>
                        <h1>lorem <br/> ipsum</h1>
                        <p>Consectetur adipiscing elit. <br />
                        Nulla condimentum tortor sem,<br />
                        in semper nisl bibendum eu.</p>
                    </Content>
                </Slide3>
              
            </Slider>
        </Wrapper>
    )
}

export default Carousel
