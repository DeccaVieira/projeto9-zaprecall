import { useState } from "react"
import MainPage from "./MainPage"
import QUESTIONS from "./questions"
import GlobalStyle from "./components/theme/globalStyle"
import StartRecall from "./StartRecall"

export default function App(props) {
    const [start, setStart] = useState(false)


    return (
        <>
            <GlobalStyle />
            {start === false ?
                <StartRecall start={start} setStart={setStart} />
                :
                <MainPage questions={QUESTIONS} />}
        </>



    )
}
