import { useState } from "react"
import * as S from "./style"
import SelectPlayer from "../SelectPlayer";
import Player from "../Player";
import Choice from "../Choice";
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"
import interroga from "../../assets/interroga.png"

export default function GameDisplay(){
    const [playerName, setPlayerName] = useState("");
    const [start, setStart] = useState(false);

    const [choicePlayer, setChoicePlayer] = useState(undefined);
    const [choiceComputer, setChoiceComputer] = useState(undefined);

    const [pontPlayer, setPontPlayer] = useState(0);
    const [pontComputer, setPontComputer] = useState(0);

    const[winner, setWinner] = useState("");

    const optionChoice = [
        { name: "pedra", Image: pedra},
        { name: "papel", Image: papel},
        { name: "tesoura", Image: tesoura}
    ]
        !winner && choiceComputer && choicePlayer && setWinner(findWinner(choicePlayer, choiceComputer))

    function selectChoiceComputer(){
        const select = Math.floor(Math.random()*3);
        setChoiceComputer(optionChoice[select])
    }    
    function reset(){
        setChoiceComputer(undefined)
        setChoicePlayer(undefined)
        setWinner("")
    }
    function restart(){
        setChoiceComputer(undefined)
        setChoicePlayer(undefined)
        setPontComputer(0)
        setPontPlayer(0)
        setWinner("")
        setPlayerName("")
        setStart(false)
    }
    function findWinner(choicePlayer, choiceComputer){
        if (choiceComputer.name === choicePlayer.name){
            return "Empate!";
        } else if (choicePlayer.name === "pedra"){
            if (choiceComputer.name === "papel"){
                setPontComputer(pontComputer + 1)
                return "Vitória do Computador!";
            } else {
                setPontPlayer(pontPlayer + 1)
                return playerName + "!";
            }
        } else if (choicePlayer.name === "papel"){
            if (choiceComputer.name === "tesoura"){
                setPontComputer(pontComputer + 1)
                return "Vitória do Computador!";
            } else {
                setPontPlayer(pontPlayer + 1)
                return playerName + "!";
            }
        } else if (choicePlayer.name === "tesoura"){
            if (choiceComputer.name === "pedra"){
                setPontComputer(pontComputer + 1)
                return "Vitória do Computador!"
            } else {
                setPontPlayer(pontPlayer + 1)
                return playerName + "!";
            }
        }
    }

    return (
        <S.Container>
            <S.NameGame>Jokenpo</S.NameGame>
            {
                !start && <SelectPlayer> playerName = {playerName} setPlayerName = {setPlayerName} </SelectPlayer>
            }
            {
                start && 
                <S.ContainerPlayers>
                    <Player pont={pontPlayer} playerName = {playerName} imgChoice = {choicePlayer ? choicePlayer.Image: interroga}/>
                <S.ContainerControls>
                    {!choicePlayer && <Choice optionChoice = {optionChoice} setChoicePlayer={setChoicePlayer} />}
                    {winner && 
                    <>
                        <S.Winner>Vencedor: {winner}</S.Winner>
                        <S.ButtonAgain onClick={() => {reset()}}>Tentar Novamente?</S.ButtonAgain>
                        <S.ButtonNew onClick={() => {restart}}>Novo Jogador</S.ButtonNew>
                    </>
                    }
                    {winner && choicePlayer && <S.ButtonGo onClick={optionChoice}>Jokenpo!</S.ButtonGo>}
                </S.ContainerControls>
                <Player pont={pontComputer} playerName = "Computer" imgChoice = {choiceComputer ? choiceComputer.Image: interroga}/>
                </S.ContainerPlayers>
            }
        </S.Container>
    )
}