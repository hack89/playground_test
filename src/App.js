import React, {Fragment, useEffect, useState} from 'react';
 
import styled from 'styled-components'

import CookieConsent from "react-cookie-consent";
import Carousel from './components/Carousel/Carousel'
import Navbar from './components/layout/Navbar'
import Cards from './components/Cards/Cards'
import Sidebar from './components/layout/Sidebar'
import Banners from './components/Banners/Banners'
import FormWrapper from './components/Form/FormWrapper'
import Tabs from './components/Tab/Tabs'
import FooterWrap from './components/Footer/FooterWrap'
import './App.css'





const AppWrap = styled.div`
 
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
 

`


const App =()=> {
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
    console.log(collapsed)

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      const isTop = window.scrollY > 100;
      
      
      if(isTop){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  },[])

  const changeCollapsed =()=> {
    const hamb = document.querySelector('#nav-icon');
    hamb.classList.toggle('open')
    setCollapsed(!collapsed)
  }


  return (
<Fragment>
   
    <Navbar changeCollpased={changeCollapsed}  isScrolled={scrolled}/>
    <Sidebar collapsed={collapsed}/> 
    <Carousel />
      <AppWrap>
         <Cards />
      </AppWrap>
      <Banners/>
      <AppWrap>
        <Tabs />

      </AppWrap>
      <FormWrapper  />
      <FooterWrap isScrolled={scrolled}/>
      <CookieConsent
          disableStyles={true}
          expires={365}
          buttonText="Ok"
          location={'bottom'}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: "white", 
            fontSize: '10px',
            color: 'black', 
            textAlign: 'center',
            borderColor: 'transparent',
            borderTopColor: '#fff',
            borderBottomColor: '#fff',
            height: '50px'
           
             }}
          buttonStyle={{
             
            height: '30px',
            width: '100px',
            color: "white", 
            textTransform: 'uppercase',
            fontWeight: "bolder", 
       
            textAlign: 'center',
            marginLeft: '20px',
            background: 'black'
         
            }}
        >
          Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy.
      
        </CookieConsent>
    </Fragment>
  );
}

export default App;
