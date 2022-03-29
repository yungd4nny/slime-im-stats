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
                        Type
                    }
            }
        }
        `);
    const data = protectorData.allSlimerippedProtectionCsv.nodes || [];
    const currentProtector = data.filter(item => (item.Name.includes(props?.name)));

    return (
        <Link to={`/protectorDetailsPage`}
            id='CharTile'
            className={styles.tileContainer}
            state={{ props: props }}
        >
            <img src={currentProtector[0].Picture}
                className={styles.charImage}></img>
            <img src={currentProtector[0].Type}
                className={styles.typeImage}>
            </img>
            <span className={styles.charText}>{props.baseRarity} {props.name}</span>
        </Link>
    )
}

export default ProtectorTile
