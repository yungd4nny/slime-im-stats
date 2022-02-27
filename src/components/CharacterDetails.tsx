import * as React from 'react'
import * as styles from "./characterDetails.module.scss"
import { CharacterTileProps } from './characterTile.props'


function CharacterDetails(props: CharacterTileProps) {
    return (
        <div
            className={styles.detailsContainer}
            id='chardetailscontainer'
        >
            <div
                className={styles.detailsName}>
                {props.name}
            </div>
            <img
                src={props.imageUrl}
                className={styles.detailsIcon}></img>

        </div >
    )
}

export default CharacterDetails