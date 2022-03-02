import * as React from 'react'
import * as styles from "../styles/characterDetails.module.scss"
import { CharacterTileProps } from './characterTile.props'


function CharacterDetails(props: CharacterTileProps) {
    var splitSkillOne = props.battleSkillOne.split("Lv.1/Lv.10");
    splitSkillOne[1] = splitSkillOne[1]?.substring(2);
    var splitSkillTwo = props.battleSkillTwo.split("Lv.1/Lv.10");
    splitSkillTwo[1] = splitSkillTwo[1]?.substring(2);

    return (
        <div
            className={styles.detailsContainer}
            id='chardetailscontainer'
        >
            <div
                className={styles.detailsInnerContainer}>
                <div
                    className={styles.detailsName}>
                    <img src={props.type}
                        className={styles.typeIcon}></img>
                    <span className={styles.charNameText}>{props.name}</span>
                    <img src={props.atkType}
                        className={styles.typeIcon}></img>
                </div>
                <div className={styles.detailsIconContainer}>
                    <img
                        src={props.imageUrl}
                        className={styles.detailsIcon}></img>
                </div>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillTextName}>{splitSkillOne[0]}</div>
                    <div className={styles.skillText}>{splitSkillOne[1]}</div>
                    <div className={styles.skillText}>{splitSkillOne[2]}</div>
                    <div className={styles.skillTextName}>{splitSkillTwo[0]}</div>
                    <div className={styles.skillText}>{splitSkillTwo[1]}</div>
                    <div className={styles.skillText}>{splitSkillTwo[2]}</div>
                </div>
                <div className={styles.townTraitContainer}>
                    <div className={styles.townTraitText}>{props.townTraitOne}</div>
                    <div className={styles.townTraitText}>{props.townTraitTwo}</div>
                </div>
                <div>
                    <div
                        className={styles.statsContainer}>
                        <img src={props.growthType}
                            className={styles.typeIcon}></img>
                        <span className={styles.statsText}>Growth Type</span>
                    </div>
                    <div
                        className={styles.statsContainer}>
                        <img src="https://i.imgur.com/MLuLYZy.png"
                            className={styles.typeIcon}></img>
                        <span className={styles.statsText}>{props.maxHp}</span>
                    </div>
                    <div
                        className={styles.statsContainer}>
                        <img src="https://i.imgur.com/yduAVsz.png"
                            className={styles.typeIcon}></img>
                        <span className={styles.statsText}>{props.maxAtk}</span>
                    </div>
                    <div
                        className={styles.statsContainer}>
                        <img src="https://i.imgur.com/P4N7gFs.png"
                            className={styles.typeIcon}></img>
                        <span className={styles.statsText}>{props.maxDef}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CharacterDetails