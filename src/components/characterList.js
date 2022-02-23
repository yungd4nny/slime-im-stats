import * as React from 'react'
import * as charListStyles from "./characterList.module.css"
import CharacterTile from './characterTile'
import { CharacterTileProps } from './characterTile.props'
import data from '../slime.json'

function CharacterList() {
    return (
        <div id='CharList'>
            <div>This is the character list!</div>
            {data['Battle Characters'].map((item, index) => {
                return (
                    <CharacterTile
                        id={index}
                        name={item['Name']}
                        baseRarity={item['Base Rarity']}
                    >
                    </CharacterTile>
                )
            })}
        </div>
    )
}

export default CharacterList