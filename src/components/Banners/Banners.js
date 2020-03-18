import React from 'react'
import styled from 'styled-components'
import Banner1 from './singleBanner/Banner1'
import Banner2 from './singleBanner/Banner2'
import Banner3 from './singleBanner/Banner3'


const BannersWrapper = styled.div`
    width: 100%;
    height: 100%;


`

const Banners = ({id}) => {
    return (
        <BannersWrapper >
            <Banner1  id='section1'/>
            <Banner2 id='section2'/>
            <Banner3 id='section3'/>
        </BannersWrapper>
    )
}

export default Banners
