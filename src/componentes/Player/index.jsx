import * as S from "./style"
import { useState } from "react"
import interroga from "../../assets/interroga.png"

export default function Player({playerName, imgChoice, pont}){

    return (
        <S.Container id = "player">
            <S.Name id = "playerName">{playerName}</S.Name>
            <S.Image id = "S.ImageChoice" src={imgChoice}/>
            <S.Pont id = "pont">Pontuação: {pont} </S.Pont>
        </S.Container>
    )
}