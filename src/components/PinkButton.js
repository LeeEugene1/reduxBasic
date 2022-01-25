import React from 'react'
import styled from 'styled-components'

const MyButton = styled.a`
 width:100px;
 height:30px;
 background-color:red;
 color:white;
`

export function PinkButton({text, clickEvent}){
    return <MyButton onClick={clickEvent}>{text}</MyButton>
}