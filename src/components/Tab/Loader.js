import React from 'react'
import Spinner from '../../assets/images/loader.png'
import styled from 'styled-components'

const SpinnerWrapper = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 200px;
    height: 100vh;
`

const Spinn = styled.img`
   animation: rotating infinite linear 2s;
    width: 30px;
    height: 30px;

    @keyframes rotating{
        from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
    }

`


 const Loader = () => {
    return (
        <SpinnerWrapper>
            <Spinn src={Spinner} alt=""/>
        </SpinnerWrapper>
    )
}


export default Loader