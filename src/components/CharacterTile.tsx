import * as React from 'react'
import { CharacterTileProps } from './characterTile.props'
import * as styles from '../styles/characterTile.module.scss'
import { Link } from 'gatsby'

function CharacterTile(props: CharacterTileProps) {

    return (
        <Link to={`/characterDetailsPage/${props.id}`}
            id='CharTile'
            className={styles.tileContainer}
            state={{ props: props }}
        >
            <img src={props.imageUrl}
                className={styles.charImage}></img>
            <img src={props.type}
                className={styles.typeImage}>
            </img>
            <span className={styles.charText}>{props.baseRarity} {props.name}</span>
        </Link>
    )
}

export default CharacterTile
