import * as React from 'react'
import * as styles from '../styles/characterTile.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { typeStringConverter } from '../helpers/typeStringConverter';
import { statStringConverter } from '../helpers/statStringConverter';
import { charImageChecker } from '../helpers/charImageChecker';

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
     //convert string types to imgur links
     var typeImageSrc = typeStringConverter(currentProtector[0]?.Main_Type);
     var secondTypeImageSrc = typeStringConverter(currentProtector[0]?._2nd_Type);
     
     //is the image coming from slime website?
     var charImageNeedsResize = charImageChecker(currentProtector[0]?.Picture);

    return (
        <Link to={`/protectorDetailsPage/${props.name}`}
            id='ProtecTile'
            className={styles.tileContainer}
            state={{ props: props }}
        >
            {charImageNeedsResize ? (
                <div className={styles.charImage}>
                    <img src={currentProtector[0].Picture}
                    className={styles.charImageResized}/>
                </div>
                ) : (
                    <img src={currentProtector[0].Picture}
                        className={styles.charImage}/>)}
            <img src={typeImageSrc}
                className={styles.typeImage}>
            </img>
            {currentProtector[0]._2nd_Type && (
            <img src={secondTypeImageSrc}
                className={styles.secondTypeImage}>
            </img>)}
            <span className={styles.charText}>{currentProtector[0].Base_Rarity} {props.name}</span>
        </Link>
    )
}

export default ProtectorTile
