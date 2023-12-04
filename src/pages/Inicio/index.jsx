import { useEffect, useState } from "react";
import styled from "styled-components";

const Corpo = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`
const Img = styled.img`
    cursor: pointer;
`

function Inicio () {
    return (
        <>
            <Corpo>
                <Img src="/entrou.jpeg" alt="Logo de um certinho" onClick={()=>{
                    return window.location.pathname = "/"
                }}/>
            </Corpo>
        </>
    )
}

export default Inicio;