import { useState } from "react"
import * as S from "./style"
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"


export default function Choice({optionChoice, setChoicePlayer}){
    
    return (
        <S.Container>
            <S.Title>Faça sua escolha!</S.Title>
            <S.ContainerChoice>
                <S.ImageChoice onClick={() => setChoicePlayer(optionChoice[0])} src={pedra}/>
                <S.ImageChoice onClick={() => setChoicePlayer(optionChoice[1])} src={papel}/>
                <S.ImageChoice onClick={() => setChoicePlayer(optionChoice[2])} src={tesoura}/>
            </S.ContainerChoice>
        </S.Container>
    )
}