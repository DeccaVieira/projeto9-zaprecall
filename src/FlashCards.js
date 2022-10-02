import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import seta from "./components/assets/seta_play.png";
import virar from "./components/assets/seta_virar.png"

export default function FlashCards(props){
  const { id, title, question, answer } = props.questions
  const [card, setCard] = useState("closed")
  const [showAnswer, setShowAnswer] = useState(false)

function virarCard(){
  return (
    setCard("open"))
}

function teste(){
  return setShowAnswer(true)
}
    return (
        <>
        {card === "closed" ?
        <PerguntaFechada>
          <p>{title}</p>
        <img onClick={virarCard} src={seta} alt="seta"/> 
        </PerguntaFechada> :
showAnswer === false?
        <PerguntaAberta>
          {question}

<img onClick = {teste} src={virar} alt="virar"/>
        </PerguntaAberta> :
        <PerguntaAberta>
        {answer}
<Button>{title}</Button>

      </PerguntaAberta> 

         }


        </>


    )
}
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family:'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  `
  const PerguntaFechada = styled.div `
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`
