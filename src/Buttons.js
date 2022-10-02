import { useState } from "react"
import styled from "styled-components"


export default function Buttons(props){
 
  console.log(props.zap)
  
    return(
        
<ContainerBotao>
<NoButton><button onClick={() => props.setZap("no")}>Não lembrei</button></NoButton>
<AlmostButton><button onClick={() => props.setZap("almost")}>Quase não lembrei</button></AlmostButton>
<ZapButton><button onClick={() => props.setZap("zap")}>ZAp!</button></ZapButton>
</ContainerBotao>
    )
}
const ContainerBotao = styled.div `
display: flex;
width: 90%;
justify-content: space-between;
margin: 5px;

`
const ZapButton = styled.div`
button {
  width: 80px;
  height:35px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin:13px
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: #FFFFFF;
  background: #2FBE34;
  border-radius: 5px;
 border:none;
  padding:5px;
}
`
const AlmostButton = styled(ZapButton)`
button{
background-color:#FF922E}`

const NoButton = styled(ZapButton)`
button{
background-color:#FF3030}`