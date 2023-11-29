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
const Horario = styled.h1`
    font-size: 50px;
    font-weight: bold;
`
const Botao = styled.button`
    background-color: black;
    color: white;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
`

function Inicio () {
    const [segundos, setSegundos] = useState(new Date().getSeconds());
    const [minutos, setMinutos] = useState(new Date().getMinutes());
    const [horas, setHoras] = useState(new Date().getHours());
    const [dia, setDia] = useState(new Date().getDate());
    const [mes, setMes] = useState(new Date().getMonth());
    const [ano, setAno] = useState(new Date().getFullYear());
    
    useEffect(() => {
       setInterval(() => {
            setSegundos(new Date().getSeconds());
            setMinutos(new Date().getMinutes());
            setHoras(new Date().getHours());
        }, 1000);
        setDia(new Date().getDate());
        setMes(new Date().getMonth()+1);
        setAno(new Date().getFullYear());
    }, []);

    return (
        <>
            <Corpo>
                <h2>{dia}/{mes}/{ano}</h2>
                <Horario>{horas}:{minutos}:{segundos}</Horario>
                <Botao>Marcar Ponto</Botao>
            </Corpo>
        </>
    )
}

export default Inicio;