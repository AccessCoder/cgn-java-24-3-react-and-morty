import './App.css'
import {useState} from "react";
import {Character, result} from "./Data.ts";
import CharacterGallery from "./components/CharacterGallery.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(result)
    const [searchText, setSearchText] = useState<string>("")

    const filteredChars =
        characters.filter((char) => char.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <>
        <input type={"text"} onChange={(event) => setSearchText(event.target.value)}/>
        {filteredChars.length > 0 ?
       <CharacterGallery characters={filteredChars}/>
            :
            <p>No Characters Found</p>
        }
    </>
  )
}

export default App
