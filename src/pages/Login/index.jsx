import styled from "styled-components";
import { useState } from "react";
import { buscaUsuario } from "../../../api";
import { Link } from "react-router-dom";

const Corpo = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`
const CadastrarUsuario = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const CampoIlustrativo = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`
const Inputs = styled.input`
    display: block;
    width: 423px;
    height: 59px;
    padding-left: 20px;
    font-size: 17px;
    border-radius: 10px;
`
const Botao = styled.h2`
    width: 423px;
    height: 57px;
    color: white;
    background-color: black;
    font-size: 21px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 10px;
`
const TagLink = styled(Link)`
    text-decoration: none;
    margin: 0;
    padding: 0;
    line-height: auto;
`

function Login () {
    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");
    return (
        <>
            <Corpo>
                <CadastrarUsuario>
                    <InputsArea>
                        <Inputs type="text" placeholder="Email" onChange={(e) => {
                            setEmailLogin(e.target.value)
                        }}/>
                        <Inputs type="password" placeholder="Senha" onChange={(e) => {
                            setSenhaLogin(e.target.value)
                        }}/>
                    </InputsArea>
                        <Botao onClick={async () => {
                            const resposta = await buscaUsuario(emailLogin);
                            if(resposta.email == emailLogin && resposta.senha == senhaLogin) {
                                return window.location.pathname = "/entrar"
                            } else if (resposta.email == emailLogin && resposta.senha != senhaLogin) {
                                alert("Senha incorreta!")
                            }
                            else {
                                return alert(resposta)
                            };
                        }}>Entrar</Botao>
                    <TagLink to="/">
                        <h4>Não tem uma conta?</h4>
                    </TagLink>
                </CadastrarUsuario>     
                <CampoIlustrativo>
                    <img src="/pessoas-cadastro.svg" alt="Logo pessoas" />    
                </CampoIlustrativo>          
            </Corpo>
        </>
    )
}

export default Login;