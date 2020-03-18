import React from 'react'
import styled from 'styled-components'
import Form from './Form'


const FormerWrapperStyle = styled.div`
    width: 100%;
    background: black;
    height:500px;    
`

const FormerWrapper = ({id}) => {
    return (
        <FormerWrapperStyle id="section4">
            <Form/>
            
        </FormerWrapperStyle>
    )
}

export default FormerWrapper
