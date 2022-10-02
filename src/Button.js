import styled from "styled-components"
export default function Button(){

    return(
        
<ContainerBotao>
  <button>ZAp</button>
  <button>Não tenho Certeza</button>
  <button>Não sei</button>
</ContainerBotao>
    )
}
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