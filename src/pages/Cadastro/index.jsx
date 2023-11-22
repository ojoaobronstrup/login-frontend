import { useState } from "react";
import styled from "styled-components";
import cadastraUsuario from "../../../api";

const InputsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`
const Inputs = styled.input`
    display: block;
    width: 15vw;
`

function Cadastro () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <>
            <h1>Cadastro</h1>
            <InputsArea>
                <Inputs type="text" onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <Inputs type="password" onChange={(e) => {
                    setSenha(e.target.value);
                }}/>
            </InputsArea>
            <button onClick={async () => {
                const resposta = await cadastraUsuario(email, senha);
                console.log(resposta);
            }}>Cadastrar</button>
        </>
    )
};

export default Cadastro;