import * as React from 'react'
import * as styles from '../styles/characterDetails.module.scss'
import { CharacterTileProps } from './characterTile.props'
import { Scrollbars } from 'react-custom-scrollbars-2';


function CharacterDetails(props: CharacterTileProps) {
    //parse skill strings
    if (props.battleSkillOne) {
        var splitSkillOne = props.battleSkillOne.split("Lv.1/Lv.10");
        splitSkillOne[1] = splitSkillOne[1]?.substring(2);
    }
    if (props.battleSkillTwo) {
        var splitSkillTwo = props.battleSkillTwo.split(/Lv.1\/Lv.10|Lv.1\/Lv10/);
        splitSkillTwo[1] = splitSkillTwo[1]?.substring(2);
    }

    //determine expertise image
    var expertiseImageSrc;
    if (props.expertise === "Katana") {
        expertiseImageSrc = "https://i.imgur.com/GzjFDuk.png";
    } else if (props.expertise === "Magic Tome" || props.expertise === "Tome") {
        expertiseImageSrc = "https://i.imgur.com/OD93qKZ.png";
    } else if (props.expertise === "Sword") {
        expertiseImageSrc = "https://i.imgur.com/ATso0Oh.png";
    } else if (props.expertise === "Greatsword") {
        expertiseImageSrc = "https://i.imgur.com/HSDNq0i.png";
    } else if (props.expertise === "Lance") {
        expertiseImageSrc = "https://i.imgur.com/ayJUL2b.png";
    } else if (props.expertise === "Hammer") {
        expertiseImageSrc = "https://i.imgur.com/cjuCnpU.png";
    } else if (props.expertise === "Fist") {
        expertiseImageSrc = "https://i.imgur.com/8YV85Vx.png";
    }

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
                    className={styles.detailsName}>
                    <img src={props.type}
                        className={styles.headerIcon}></img>
                    <span className={styles.charNameText}>{props.name}</span>
                    <img src={props.atkType}
                        className={styles.headerIcon}></img>
                </div>
                <div
                    className={styles.detailsInnerContainer}>
                    <div className={styles.detailsIconContainer}>
                        <img
                            src={props.imageUrl}
                            className={styles.detailsIcon}></img>
                        <div className={styles.statsContainer}>
                            <div
                                className={styles.statsBoxes}>
                                <img src={props.growthType}
                                    className={styles.typeIcon}></img>
                                <span className={styles.growthTypeText}>Growth Type</span>
                            </div>
                            <div
                                className={styles.statsBoxes}>
                                <img src="https://i.imgur.com/MLuLYZy.png"
                                    className={styles.typeIcon}></img>
                                <span className={styles.statsText}>{props.maxHp}</span>
                            </div>
                            <div
                                className={styles.statsBoxes}>
                                <img src="https://i.imgur.com/yduAVsz.png"
                                    className={styles.typeIcon}></img>
                                <span className={styles.statsText}>{props.maxAtk}</span>
                            </div>
                            <div
                                className={styles.statsBoxes}>
                                <img src="https://i.imgur.com/P4N7gFs.png"
                                    className={styles.typeIcon}></img>
                                <span className={styles.statsText}>{props.maxDef}</span>
                            </div>
                        </div>
                    </div>
                    <div id="skills" className={styles.skillsContainer}>
                        <h1 className={styles.skillHeader}>Skills</h1>
                        {splitSkillOne && splitSkillOne.length >= 0 && <div className={styles.skillTextName}>{splitSkillOne[0]}</div>}
                        {splitSkillOne && splitSkillOne.length >= 1 && <div className={styles.skillText}>{splitSkillOne[1]}</div>}
                        {splitSkillOne && splitSkillOne.length >= 2 && <div className={styles.skillText}>{splitSkillOne[2]}</div>}
                        <br></br>
                        {splitSkillTwo && splitSkillTwo.length >= 0 && <div className={styles.skillTextName}>{splitSkillTwo[0]}</div>}
                        {splitSkillTwo && splitSkillTwo.length >= 1 && <div className={styles.skillText}>{splitSkillTwo[1]}</div>}
                        {splitSkillTwo && splitSkillTwo.length >= 2 && <div className={styles.skillText}>{splitSkillTwo[2]}</div>}
                    </div>
                    <div id="awakenedTraits" className={styles.awakenedTraitContainer}>
                        <h1 className={styles.skillHeader}>Awakened Trait</h1>
                        <div className={styles.skillText}>{props.charTraitOne}</div>
                        <br></br>
                        <div className={styles.skillText}>{props.charTraitTwo}</div>
                    </div>
                </div>
                <div
                    className={styles.detailsInnerContainer}>
                    <div id="secretSkill" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Secret Skill</h1>
                        <div className={styles.townTraitText}>{props.secretSkill}</div>
                    </div>
                    <div id="townTraits" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Town Traits</h1>
                        <div className={styles.townTraitText}>{props.townTraitOne}</div>
                        <div className={styles.townTraitText}>{props.townTraitTwo}</div>
                    </div>
                    <div id="awakenedTraits" className={styles.expertiseContainer}>
                        <h1 className={styles.skillHeader}>Expertise</h1>
                        <img src={expertiseImageSrc}
                            className={styles.expertiseIcon}></img>
                    </div>
                </div>
            </div >
        </Scrollbars>
    )
}

export default CharacterDetails