import { useState } from "react"
import styled from "styled-components"
import logo from "./components/assets/logo.png"
export default function StartRecall(props) {
    const { start, setStart } = props
 
    function StartRecall() {
        return setStart(true)
    }
    
    return (
        <ScreenContainer>
            <LogoImg src={logo} alt="Logotipo" />
            <Logot><h1>ZapRecall</h1>
                <button onClick={StartRecall}>Iniciar Recall!</button>
            </Logot>
        </ScreenContainer>
    )
}
const ScreenContainer = styled.main`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
   }
  `
const Logot = styled.div` 
  display:flex;
  flex-direction:column;
    h1{font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  margin-top:13px; }

  button {
    width: 246px;
    height: 54px;
    background-color: #FFFFFF;
    border-radius:5px;
    border:none;
    margin-top:30px;
        font-family:'Recursive'
        font-size:38px;
        font-weight:400;
        color:#D70900;
      
}
`
const LogoImg = styled.img`
width: 136px;
`