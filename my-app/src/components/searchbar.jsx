import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Searchbar = ({setQuery,suggestions}) => {
    const [inputText,setInputText]=useState('');
    const [activeOption,setActiveOption]=useState(0)

    const handleInputTextChange=(e)=>{
        setInputText(e.target.value)
    }

    useEffect(()=>{
        setQuery(inputText)
    },[inputText,setQuery])
  return (
    <Wrapper>
        <SearchBarWrapper>
<Input value={inputText} onChange={handleInputTextChange} placeholder={'🔍'}/>
</SearchBarWrapper>
{!!suggestions.length&&(
<SuggestionBox active={activeOption} limit={5}>
{
    suggestions.map((item,index)=>{
        return(
            <div key={index} onMouseOver={()=>{
                setActiveOption(index+1)
            }}>
                {item}
            </div>
        )
    })
}
</SuggestionBox>
)}
</Wrapper>
  )
}

const SuggestionBox=styled.div`
    border:1px solid black;
    background:white;
    width:max-width:400px;
    display:flex;
    flex-direction:column;
    max-height:${({limit})=>`${limit * 38.8}px`};
    margin:auto;
    overflow:auto;
    position:absolute;
    & * {
        flex:1;
        text-align:left;
        padding:10px;
        padding-left:30px;
    }
    & :nth-child(${({active})=>active}){
        background:rgba(0,0,0,0.5);
        cursor:pointer;
    }
`;



const SearchBarWrapper=styled.div`

display:flex;
align-items:center;
`;


const Input=styled.input`
border:none;
border-radius:10px;
outline:none;
font-size:20px;
flex:1;
height:52px;
`;
const Wrapper=styled.div`
    max-width:400px;
    margin:auto;
`
;
export default Searchbar