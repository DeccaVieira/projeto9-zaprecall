import { useState } from "react"
import styled from "styled-components"
import FlashCards from "./FlashCards"
import Logo from "./Logo"
import FooterCompleted from "./FooterCompleted"


export default function MainPage(props) {
    const [completed, setCompleted] = useState(0)
    const [start, setStart] = useState(false)
    const { questions } = props

    return (
        <ScreenContainer start={start} setStart={setStart}>
            <Logo />
            {questions.map((quest) => <FlashCards data-identifier="flashcard" completed={completed} setCompleted={setCompleted} key={quest.id} questions={quest} />)}

            <FooterCompleted completed={completed} setCompleted={setCompleted} />
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


