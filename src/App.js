import MainPage from "./MainPage"
import QUESTIONS from "./questions"
import GlobalStyle from "./components/theme/globalStyle"

export default function App() {


    return (
        <>
            <GlobalStyle />
            <MainPage questions={QUESTIONS} />
        </>



    )
}
