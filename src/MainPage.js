import { useState } from "react"
import styled from "styled-components"
import FlashCards from "./FlashCards"
import Logo from "./Logo"

export default function MainPage(props) {
    

      const { questions } = props
     

    return (
        <ScreenContainer>
            <Logo />
            {questions.map((quest) =>  <FlashCards key={quest.id} questions={quest}/>)}
            <FooterConcluidos>
               
            </FooterConcluidos>
           
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
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  `
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    h1{font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;

    }
`
const LogoImg = styled.img`
    width: 52px;
 `
const FooterConcluidos = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
  `
