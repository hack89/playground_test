import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import LogoWhite from '../../assets/images/logo-playground-white.png'


const SidebarWrapper = styled.div`
    transform: ${({collapsed}) => collapsed ? 'translateX(-100%)' : 'translateX(0%)' }; 
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 140px;
    background: rgba(0,0,0,.96);
    position: fixed;
    top: 0; 
    color: white;
    z-index: 99;
    left: 0;
    padding: 20px;
    transition: transform ease-in .3s;
    justify-content: space-between;
`


const SidebarStyle = styled.ul`
    list-style: none;

    & > li{
        cursor: pointer;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid grey;
    }
`

const Sidebar = ({collapsed}) => {
    return (
        <SidebarWrapper collapsed={collapsed}>
            <SidebarStyle>
               <li><Link to="section1"  spy={true} smooth={true} duration={700} >we are</Link> </li> 
               <li><Link to="section2" offset={-60} spy={true} smooth={true} duration={700} >we do</Link> </li>
               <li><Link to="section3" offset={-60} spy={true} smooth={true} duration={700} >careers</Link> </li> 
               <li><Link to="section4" offset={-60} spy={true} smooth={true} duration={700} >contact us</Link> </li> 
               {/* <li> <Link to="section5" offset={-60} spy={true} smooth={true} duration={500} >arcade</Link></li> */}
        </SidebarStyle>
        <img src={LogoWhite} alt="" />
       </SidebarWrapper>
    )
}

export default Sidebar






 