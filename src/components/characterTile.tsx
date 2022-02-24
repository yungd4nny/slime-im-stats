import * as React from 'react'
import { CharacterTileProps } from './characterTile.props'
import * as styles from './characterTile.module.scss'

function CharacterTile(props: CharacterTileProps) {

    return (
        <div
            id='CharTile'
            className={styles.tileContainer}
        >
            <div>{props.name} is a {props.baseRarity}</div>
        </div>
    )
}

export default CharacterTile