import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import LogoWhite from '../../assets/images/logo-playground-white.png'

const BannerWrapper = styled.div`
    width: 100%;
    background: black;
    display: flex;
    height: 64%;
    margin-top: 80px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
 `


 const FooterMenuStyle = styled.ul`
    
    list-style: none;
    display: flex;
    & > li a {
        text-align: center;
        cursor: pointer;
        color: white;
        margin: 0 35px;
        letter-spacing: 2px;
        @media(max-width: 1037px){
        margin-bottom: 6px;
        border-bottom: 1px solid grey;
        
        }
    }

    @media(max-width: 1037px){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
   
  }
`


const SocialFooter = styled.ul`
    & > i {
        margin: 0 10px;
    font-size: 20px;
    cursor: pointer;

 

    }
   
    color: rgba(255,255,255,.5);
 
`


 

const Footer = () => {
    return (
        <BannerWrapper>
            <div>
                <img src={LogoWhite} alt=""/>
            </div>
            <FooterMenuStyle>
               <li><Link to="section1"  spy={true} smooth={true} duration={500} >we are</Link> </li> 
               <li><Link to="section2" offset={-60} spy={true} smooth={true} duration={500} >we do</Link> </li>
               <li><Link to="section3" offset={-60} spy={true} smooth={true} duration={500} >careers</Link> </li> 
               <li><Link to="section4" offset={-60} spy={true} smooth={true} duration={500} >contact us</Link> </li> 
               {/* <li> <Link to="section5" offset={-60} spy={true} smooth={true} duration={500} >arcade</Link></li> */}
            </FooterMenuStyle>

            <SocialFooter>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>

            </SocialFooter>
        </BannerWrapper>
    )
}

export default Footer
