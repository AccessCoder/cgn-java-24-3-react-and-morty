import {Character} from "../Data.ts";

type CharacterCardProps = {
    char:Character
}
export default function CharacterCard(props:Readonly<CharacterCardProps>){

    return(
        <>
            <h2>{props.char.name}</h2>
            <img src={props.char.image} alt={props.char.name}/>
        </>
    )
}