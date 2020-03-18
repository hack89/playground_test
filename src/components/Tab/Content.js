import React from 'react'
import styled from 'styled-components'

const ContentParagraph = styled.p`
    line-height: 1.5;
    font-size: 13px;
`

const Content = ({content}) => {
    let contentJoin = content.join()
 

    return (
       <ContentParagraph>{contentJoin}</ContentParagraph>
    )
}

export default Content
