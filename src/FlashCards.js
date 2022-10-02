import { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import seta from "./components/assets/seta_play.png";
import virar from "./components/assets/seta_virar.png"
import certo from "./components/assets/icone_certo.png"
import quase from "./components/assets/icone_quase.png"
import erro from "./components/assets/icone_erro.png"
export default function FlashCards(props){
  const { id, title, question, answer } = props.questions
  const [card, setCard] = useState("closed") 
  const [showAnswer, setShowAnswer] = useState(false)
  const [zap, setZap] = useState("") 

  
function virarCard(){
  console.log(zap)
  return (
    setCard("open"))
}

function teste(){
  return setShowAnswer(true)
}
    return (
        <> 
   {zap === "zap" ?
   <ZapAnswer>
   <p>{title}</p>
<img src={certo} alt="certo"/>
   </ZapAnswer> : 
   zap === "almost" ?
   <Almost>
   <p>{title}</p>
  <img src={quase} alt="quase"/>
   </Almost> : 
   zap === "no" ?
   <DontRemember>
   <p>{title}</p>
   <img src={erro} alt="erro"/>
   </DontRemember> :

        card === "closed" ?
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
<Buttons zap={zap} setZap={setZap}/>
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
const ZapAnswer = styled(PerguntaFechada)`
text-decoration:line-through;
color:#2FBE34;
p{
  color:#2FBE34;
}
`
const Almost = styled(PerguntaFechada)`
text-decoration:line-through;
color:#FF922E;
p{
  color:#FF922E;
}
`
const DontRemember = styled(PerguntaFechada)`


p{
  color:#FF3030;
  text-decoration:line-through;
}
`
const ContainerBotao = styled.div `
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
color: red;
button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: #FFFFFF;
  background: red;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
}
`
