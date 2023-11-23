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
            <GlobalStyles />
          </>
        }>
        </Route>
        <Route path="/login" element={
          <>
            <h1>Ola mundo</h1>
          </>
        }>
        </Route>
      </Routes>
    </>
  )
}

export default App
