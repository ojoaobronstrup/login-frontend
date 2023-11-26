import styled from "styled-components";

const Corpo = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(10);
`
const Imagem = styled.img`
    cursor: pointer;
`

function Inicio () {
    return (
        <>
            <Corpo>
                <Imagem src="/simbolo-confirmacao.svg" alt="Logo de confirmação" onClick={() => {
                    return window.location.pathname = "/";
                }}/>
            </Corpo>
        </>
    )
}

export default Inicio;