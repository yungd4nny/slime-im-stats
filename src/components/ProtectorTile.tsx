import * as React from 'react'
import * as styles from '../styles/characterTile.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'

function ProtectorTile(props: any) {
    const protectorData = useStaticQuery(graphql`
        query {
            allSlimerippedProtectionCsv {
                    nodes {
                        Name
                        Base_Rarity
                        Picture
                        Main_Type
                        _2nd_Type
                    }
            }
        }
        `);
    const data = protectorData.allSlimerippedProtectionCsv.nodes || [];
    const currentProtector = data.filter(item => (item.Name.includes(props?.name)));

    return (
        <Link to={`/protectorDetailsPage/${props.name}`}
            id='ProtecTile'
            className={styles.tileContainer}
            state={{ props: props }}
        >
            <img src={currentProtector[0].Picture}
                className={styles.charImage}></img>
            <img src={currentProtector[0].Main_Type}
                className={styles.typeImage}>
            </img>
            <img src={currentProtector[0]._2nd_Type}
                className={styles.secondTypeImage}>
            </img>
            <span className={styles.charText}>{currentProtector[0].Base_Rarity} {props.name}</span>
        </Link>
    )
}

export default ProtectorTile
