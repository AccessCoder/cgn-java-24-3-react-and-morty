import {Character} from "../Data.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters:Character[]
}
export default function CharacterGallery(props:Readonly<CharacterGalleryProps>){

    return(
        <>
            {props.characters.map((char) => <CharacterCard char={char}/> )}
        </>
    )
}