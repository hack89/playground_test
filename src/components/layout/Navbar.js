import React, { useState, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import LogoWhite from '../../assets/images/logo-playground-white.png'
import LogoBlack from '../../assets/images/logo-playground-black.png'
import './hamb.scss'


const Menu = styled.nav `
    overflow-x: hidden;
    background: ${({isScrolled}) => isScrolled ? 'white' : 'transparent' };
    position: ${({isScrolled}) => isScrolled ? 'fixed' : 'absolute' };
    width: 100%;
    color: ${({isScrolled}) => isScrolled ? 'black' : 'white' };
    width: 100%;;
    margin: auto;
    overflow: hidden;
    padding: 0 6rem;
    animation: ${({isScrolled}) => isScrolled ? 'animationFade 1s both' : 'none' };
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 22;
  
    @keyframes animationFade {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            -o-transform: none;
            transform: none;
        }
    }
  
`
const MenuLogo = styled.div `
    color: white;
    position: relative;
    @media(max-width: 1037px){
    visibility: hidden;
  }
`

const MenuUl = styled.ul `
    display: flex;
    @media(max-width: 1037px){
    display: none;
  }
   
`

const MenuLi = styled(Link)
`
    list-style: none;
    margin: 0 40px;
    cursor: pointer;
`

const Icon = styled.div `
  top: 30px;
  right: 40px;
  width: 30px;
  height: 25px;
  z-index: 99 !important;
  position: fixed;
   display: none;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  @media(max-width: 1037px){
    display: block;
  }

`
const spanStyle = css `
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;

`

const IconSpan = styled.span `
    ${spanStyle}

    

`

const IconSpan2 = styled.span `
 ${spanStyle}
 top: 6px;

`


const IconSpan3 = styled.span `
 ${spanStyle}
 top: 12px;

`



const Navbar = ({isScrolled, changeCollpased}) => {
  const [toggle, setToggle] = useState('')
  return (
      <Fragment>
      <Icon onClick={changeCollpased} className={toggle} id="nav-icon">
              <IconSpan></IconSpan>
              <IconSpan2></IconSpan2>
              <IconSpan3></IconSpan3>
          </Icon>
      <Menu isScrolled={isScrolled} >
          <MenuLogo onClick={()=> window.scrollTo({top: 0, behavior: 'smooth',})} style={{cursor: 'pointer'}}>
              <img src={isScrolled ? LogoBlack : LogoWhite } alt=""/>
          </MenuLogo>
          <MenuUl>
              <MenuLi to="section1" offset={-60} spy={true} smooth={true} duration={700} >we are</MenuLi>
              <MenuLi to="section2" offset={-60} spy={true} smooth={true} duration={700} >we do</MenuLi>
              <MenuLi to="section3" offset={-60} spy={true} smooth={true} duration={700} >careers</MenuLi>
              <MenuLi to="section4" offset={-60} spy={true} smooth={true} duration={700} >contact us</MenuLi>
              {/* <MenuLi to="section5" offset={-60} spy={true} smooth={true} duration={500} >arcade</MenuLi> */}
          </MenuUl>
  
      </Menu>
      </Fragment>
  )
}


export default Navbar