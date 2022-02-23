import * as React from 'react'
import { CharacterTileProps } from './characterTile.props'

function CharacterTile(props: CharacterTileProps) {

    return (
        <div id='CharTile'>
            <div>{props.name} is a {props.baseRarity}</div>
        </div>
    )
}

export default CharacterTile