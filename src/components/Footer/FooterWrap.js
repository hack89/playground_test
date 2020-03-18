import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
 


const FooterWrapperStyle = styled.div`
    width: 100%;
    border-top: 2px solid white;
    height: 354px;
    background: black;


    
    #up_top.visible {
        position: fixed;
       font-size: 40px;
        bottom: 80px;
        right: 30px;
        color: #ccc;
        cursor: pointer;
        text-shadow: 1px 1px 1px black;
        animation: flip linear 1s infinite;
        display: inline-block !important;
        z-index: 999;
    }    

    @keyframes flip{
        0% {
            transform: translateY(0px)
        }
        50%{
            transform: translateY(5px)
        }
        75%{
            transform: translateY(7px)
        }
        100% {
            transform: translateY(0px)
        }
    }
    
`

 

const FooterWrapper = ({isScrolled}) => {
    return (
        <FooterWrapperStyle id="section5">
            <Footer/>
            <i className={isScrolled ? 'fas fa-chevron-circle-up visible' : ''} id="up_top" onClick={()=> window.scrollTo({top: 0, behavior: 'smooth',})}></i>
        </FooterWrapperStyle>
    )
}

export default FooterWrapper
