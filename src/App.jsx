import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles"
import Cadastro from "./pages/Cadastro"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Cadastro />
          </>
        }>
        </Route>
      </Routes>
    </>
  )
}

export default App
