import styled from "styled-components"
export default function Buttons(props) {
  const { completed, setCompleted } = props
  const {icon , setIcon} = props 
  
  function checkNo() {
    props.setZap("no")
    setCompleted(completed + 1)
    
  }
  function checkAlmost() {
    props.setZap("almost")
    setCompleted(completed + 1)
  }
  function checkZap() {
    props.setZap("zap")
    setCompleted(completed + 1)
  }

  return (

    <ContainerBotao>
      <NoButton><button data-identifier="forgot-btn" onClick={checkNo}>Não lembrei</button></NoButton>
      <AlmostButton><button data-identifier="almost-forgot-btn" onClick={checkAlmost}>Quase não lembrei</button></AlmostButton>
      <ZapButton><button data-identifier="zap-btn" onClick={checkZap}>Zap</button></ZapButton>
    </ContainerBotao>
  )
}
const ContainerBotao = styled.div`
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