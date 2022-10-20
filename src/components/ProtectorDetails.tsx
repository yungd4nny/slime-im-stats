import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import * as styles from '../styles/protectorDetails.module.scss';
import { typeStringConverter } from '../helpers/typeStringConverter';
import { statStringConverter } from '../helpers/statStringConverter';
import { charImageChecker } from '../helpers/charImageChecker';
import { damageTypeConverter } from '../helpers/damageTypeConverter';

function ProtectorDetails(props: any) {

    const protectorData = useStaticQuery(graphql`
        query {
            allSlimerippedProtectionCsv {
                    nodes {
                        Name
                        Base_Rarity
                        Picture
                        Main_Type
                        Growth_Type
                        Max_HP
                        Max_ATK
                        Max_DEF
                        Divine_Protection
                        Protection_Skill
                        Passive_1
                        Passive_2
                        Trait_1
                        Trait_2
                    }
            }
        }
        `);
    const data = protectorData.allSlimerippedProtectionCsv.nodes || [];
    const currentProtector = data.filter(item => (item.Name.includes(props?.Name)));
    //convert string types to imgur links
    var typeImageSrc = typeStringConverter(currentProtector[0]?.Main_Type);
    
    //convert string growth type to imgur link
    var growthTypeSrc = statStringConverter(currentProtector[0]?.Growth_Type);
    
    //is the image coming from slime website?
    var charImageNeedsResize = charImageChecker(currentProtector[0]?.Picture);

    return (
        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            className={styles.scrollbar}>
            <div
                className={styles.detailsContainer}
                id='chardetailscontainer'
            >
                <div
                    className={styles.detailsInnerContainer}>
                    <div
                        className={styles.detailsName}>
                        <img src={typeImageSrc}
                            className={styles.typeIcon}></img>
                        <span className={styles.charNameText}>{currentProtector[0]?.Name}</span>
                    </div>
                    <div className={styles.detailsIconContainer}>
                        {charImageNeedsResize ?
                            (<div className={styles.detailsIcon}>
                                <img src={currentProtector[0]?.Picture}
                                    className={styles.charImageResized}></img>
                            </div>) :
                            (<img
                                src={currentProtector[0]?.Picture}
                                className={styles.detailsIcon}></img>
                                )}
                    </div>
                    <div
                        className={styles.statsContainer}>
                        <div
                            className={styles.statsBoxes}>
                            <img src={growthTypeSrc}
                                className={styles.typeIcon}></img>
                            <span className={styles.statsText}>Growth Type</span>
                        </div>
                        <div
                            className={styles.statsBoxes}>
                            <img src="https://i.imgur.com/MLuLYZy.png"
                                className={styles.typeIcon}></img>
                            <span className={styles.statsText}>{currentProtector[0]?.Max_HP}</span>
                        </div>
                        <div
                            className={styles.statsBoxes}>
                            <img src="https://i.imgur.com/yduAVsz.png"
                                className={styles.typeIcon}></img>
                            <span className={styles.statsText}>{currentProtector[0]?.Max_ATK}</span>
                        </div>
                        <div
                            className={styles.statsBoxes}>
                            <img src="https://i.imgur.com/P4N7gFs.png"
                                className={styles.typeIcon}></img>
                            <span className={styles.statsText}>{currentProtector[0]?.Max_DEF}</span>
                        </div>
                    </div>
                    <div id="secretSkill" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Divine Protection</h1>
                        <div className={styles.townTraitText}>{currentProtector[0]?.Divine_Protection}</div>
                    </div>
                    <div id="secretSkill" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Protection Skill</h1>
                        <div className={styles.townTraitText}>{currentProtector[0]?.Protection_Skill}</div>
                    </div>
                    <div id="townTraits" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Town Traits</h1>
                        <div className={styles.townTraitText}>{currentProtector[0]?.Passive_1}</div>
                        <div className={styles.townTraitText}>{currentProtector[0]?.Passive_2}</div>
                    </div>
                    <div id="awakenedTraits" className={styles.awakenedTraitContainer}>
                        <h1 className={styles.skillHeader}>Awakened Trait</h1>
                        <div className={styles.townTraitText}>{currentProtector[0]?.Trait_1}</div>
                        <div className={styles.townTraitText}>{currentProtector[0]?.Trait_2}</div>
                    </div>
                </div>
            </div >
        </Scrollbars>
    )
}

export default ProtectorDetails;