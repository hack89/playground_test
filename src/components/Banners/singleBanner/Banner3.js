import React from 'react'
import styled from 'styled-components'
import Banner3Img from '../../../assets/images/banner-carrers.jpg'


const BannerWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    box-sizing: border-box;

`

const BannerImg = styled.div`
   background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    height: 100%;
    width: 60%;
 
    @media(max-width: 1037px){
        width: 100%;
  }
    
`

const ElementsText = styled.div`
    height: 21%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
    h1 {
        font-size: 70px;
        line-height: .9;
    }

    p {
        line-height: 1.5;
        font-size: 14px;
  
        margin-bottom: 20px;
         
    }

    button.button  {
        background: transparent;
        text-transform: uppercase;
        border: 2px solid #ddd;
        padding: 10px 9px;
        height: 50px;
        width:180px;
        color: white;
        cursor: pointer;
        
    }
   

`


const BannerText = styled.div`
    width:40%;
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    padding-left: 103px;
    color: white;
    background: black;

    @media(max-width: 1037px){
        position: absolute;
        background: rgba(0,0,0,.49);
        width: 100%;
  }
    
`



const Banner3 = ({id}) => {
    return (
        <BannerWrapper id={id}>
       <BannerImg style={{ backgroundImage: `url(${Banner3Img})`}}/>
                    
       <BannerText>
                <ElementsText>
                <h1>careers.</h1>
                <p>Consectetur adipiscing elit. <br/>
                   Nulla condimentum tortor sem.</p>
                   <button className='button' type="submit">the projects  <i className="fas fa-chevron-right"></i></button>
                </ElementsText>
            </BannerText>
        </BannerWrapper>
    )
}

export default Banner3
