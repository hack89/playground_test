import React from 'react'
import styled from 'styled-components'
import Card1 from '../../assets/images/card-innovation.png'
import Card2 from '../../assets/images/card-play-harder.png'
import Card3 from '../../assets/images/card-simplicity.png'

const CardWrap = styled.div`
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    width: 100%;
    
`
const SingleCard = styled.div`
 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
       
`



const CardHeader = styled.div`
    background-size: cover;
    background-repeat: no-repeat;

  background-position: center; 
    
    height: 130px;
    width: 100%;

`
const CardBody = styled.div`
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    ${'' /* align-items: center; */}
    & p {
        text-align: center;
        line-height: 1.6;
        font-size: 14px;
        padding: 30px 40px 30px 40px;
    }

`
const CardFooter = styled.div`
    background: black;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
        font-size: 14px;
        text-align:center;
        color: white;
    }

`

const Cards = ({id}) => {
    return (
        <CardWrap id={id}>
            <SingleCard>
                <CardHeader style={{ backgroundImage: `url(${Card2})`}}/>
                <CardBody>
                    <p>Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.</p>
                </CardBody>
                <CardFooter>
                    <p>READ MORE</p>
                </CardFooter>

            </SingleCard>
            <SingleCard>
                <CardHeader style={{ backgroundImage: `url(${Card3})`}}/>
                <CardBody>
                    <p>Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.</p>
                </CardBody>
                <CardFooter>
                    <p>READ MORE</p>
                </CardFooter>

            </SingleCard>
            <SingleCard>
                <CardHeader style={{ backgroundImage: `url(${Card1})`}}/>
                <CardBody>
                    <p>Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.</p>
                </CardBody>
                <CardFooter>
                    <p>READ MORE</p>
                </CardFooter>

            </SingleCard>
        </CardWrap>
    )
}

export default Cards
