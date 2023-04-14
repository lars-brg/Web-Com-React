import { useState } from "react"
import * as S from "./style"

export default function SelectPlayer({playerName, setName, setStart}){

    function updateName (e){
        setplayerName(e.target.value)
    }

    return (
        <S.Container>
            <S.LabelPlayer htmlFor="name">Nome do Jogador </S.LabelPlayer>
            <S.InputPlayer id="player" maxLength={10} value={playerName} onChange={()=>{updateName}}/>
            {
                playerName&&<S.ButtonStart onClick={()=>{setStart(true)}}>Iniciar Partida</S.ButtonStart>
            }
        </S.Container>
    )
}