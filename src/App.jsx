import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"

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
            <Login />
            <GlobalStyles />
          </>
        }>
        </Route>
        <Route path="/entrar" element={
          <>
            <Inicio />
            <GlobalStyles />
          </>
        }>

        </Route>
      </Routes>
    </>
  )
}

export default App
