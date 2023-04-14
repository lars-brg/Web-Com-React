import Player from "./componentes/Player"
import { Name } from "./componentes/Player/style";
import SelectPlayer from "./componentes/SelectPlayer"
import { useState } from "react";
function App() {
  
  return (
    <>
    <SelectPlayer Name = {Name} setName={setName}/>
    <Player Name = {Name} pont = {pont}/>
    </>
  )
}

export default App
