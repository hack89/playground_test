import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import TabSelector from './TabSelector'
import Content from './Content'
import Loader from './Loader'


const TabsWrap = styled.div`
    padding: 3rem 0;
    display: flex;
    justify-content:center;
    align-content:center;
    width: 100%;
    
`
const TabSelectors = styled.div`
    flex-basis: 390px;
    height: 60px;
    display: flex;
    text-align: center;
    flex-direction: column;
    @media(max-width: 1037px) {
        flex-basis: 30%;
    }
    }
       
`

const TabContent = styled.div`
    flex: 1;
    background: white;
    height: 340px;
    font-size: 12px;
    width: 751px;
    padding: 35px 60px 130px 60px;

    @media(max-width: 1037px) {
        width: 100%;
        height: 100%;
    }

`


const Tabs = () => {

    const [data, setData ] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [dataContent, setDataContent] = useState([])
    const [idFetch, setIdFetch ] = useState(0)
   
    
    const setId=(id)=>{
       
        setIdFetch(id)
    }

    const getData= async ()=>{
       try {
        const res = await fetch('http://localhost:5000/tabs')
        const data = await res.json()
        let id = idFetch

            setData(data)
            setDataContent(data[id].content)
            setIsLoaded(true)
      
       } catch (error) {
           console.log(error)
       }
    }
 
   
    useEffect(()=>{
        getData()
   
    },[idFetch])

 


    return (
      

        <TabsWrap >
     
            <TabSelectors >
                {
                    data.map((item, index) => (
                        <TabSelector currentId={idFetch} setId={setId} ids={index} title={item.title}/>
                    ))
                }
            </TabSelectors>
           
            <TabContent>
            { !isLoaded ? <Loader /> : (
                
                <Content content={dataContent}/>
                    
            ) }
            
            </TabContent>
        </TabsWrap>
    )
}

export default Tabs


 