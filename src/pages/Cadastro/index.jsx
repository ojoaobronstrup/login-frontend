import { useState } from "react";
import styled from "styled-components";
import cadastraUsuario from "../../../api";
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
`
const TagLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
`

function Cadastro () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <>
            <Corpo>
                <CadastrarUsuario>
                    <InputsArea>
                        <Inputs type="text" placeholder="Nome e sobrenome"/>
                        <Inputs type="text" placeholder="Email" onChange={(e) => {
                            setEmail(e.target.value);
                        }}/>
                        <Inputs type="password" placeholder="Senha" onChange={(e) => {
                            setSenha(e.target.value);
                        }}/>
                    </InputsArea>
                    <TagLink to="/login">
                        <Botao onClick={async () => {
                            const resposta = await cadastraUsuario(email, senha);
                            console.log(resposta);
                        }}>Registrar</Botao>
                    </TagLink>
                    <TagLink to="/login">
                        <h4>Já tem uma conta?</h4>
                    </TagLink>
                </CadastrarUsuario>     
                <CampoIlustrativo>
                    <img src="/pessoas-cadastro.svg" alt="Logo pessoas" />    
                </CampoIlustrativo>
            </Corpo>
        </>
    )
};

export default Cadastro;