import * as React from 'react'
import * as charListStyles from "./characterList.module.css"
import CharacterTile from './CharacterTile'
import { CharacterTileProps } from './characterTile.props'

function CharacterList({ characterData }) {
    return (
        <div id='CharList'>
            {characterData?.map((item, index) => {
                return (
                    <CharacterTile
                        id={index}
                        name={item.Name}
                        baseRarity={item.Base_Rarity}
                    >
                    </CharacterTile>
                )
            })}
        </div>
    )
}

export default CharacterList