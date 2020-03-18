import React from 'react'
import styled from 'styled-components'


const TabSelectorList = styled.a`
        padding: 20px 10px;
        text-decoration: none;
        color: black;
        background: ${({currentId, ids})=> currentId === ids ? 'black' : '#cccccc'};
        color: ${({currentId, ids})=> currentId === ids ? 'white' : 'black'};
        margin-bottom: 2px;
        cursor: pointer;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Gotham-Bold !important';
        transition: all .5s;

        & i {
        
            font-size: 9px;
            transform: ${({currentId, ids})=> currentId === ids ? 'rotate(180deg)' : 'rotate(0deg)'};
        }
    }
       
`


const TabSelector = ({currentId, title, ids, setId}) => {
    return (
            <TabSelectorList currentId={currentId} ids={ids} onClick={()=>setId(ids)}><p> {title}  <i className="fas fa-chevron-up"></i></p></TabSelectorList>
    )
}

 

export default TabSelector
