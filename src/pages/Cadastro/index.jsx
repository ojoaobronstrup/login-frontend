import styled from "styled-components";

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
    return (
        <>
            <h1>Cadastro</h1>
            <InputsArea>
                <Inputs type="text"/>
                <Inputs type="password"/>
            </InputsArea>
            <button>Cadastrar</button>
        </>
    )
};

export default Cadastro;