import * as React from 'react'
import { CharacterTileProps } from './characterTile.props'
import * as styles from '../styles/characterTile.module.scss'
import { Link } from 'gatsby'
import { typeStringConverter } from '../helpers/typeStringConverter';
import { charImageChecker } from '../helpers/charImageChecker';

function CharacterTile(props: CharacterTileProps) {
    //convert string types to imgur links
    var typeImageSrc = typeStringConverter(props.type);

    //check if image is sized
    var charImageNeedsResize = charImageChecker(props.imageUrl);

    return (
        <Link to={`/characterDetailsPage/${props.name}`}
            id='CharTile'
            className={styles.tileContainer}
        >
            {charImageNeedsResize ?
                (<div className={styles.charImage}>
                    <img src={props.imageUrl}
                    className={styles.charImageResized}></img>
                </div>) :
                (<img src={props.imageUrl}
                    className={styles.charImage}></img>)}
            <img src={typeImageSrc}
                className={styles.typeImage}>
            </img>
            <span className={styles.charText}>{props.baseRarity} {props.name}</span>
        </Link>
    )
}

export default CharacterTile
