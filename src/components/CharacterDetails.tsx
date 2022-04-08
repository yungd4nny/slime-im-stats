import * as React from 'react'
import * as styles from '../styles/characterDetails.module.scss'
import { CharacterTileProps } from './characterTile.props'
import { Scrollbars } from 'react-custom-scrollbars-2';


function CharacterDetails(props) {
    //parse skill strings
    if (props.Battle_Skill_1) {
        var splitSkillOne = props.Battle_Skill_1.split("Lv.1/Lv.10");
        splitSkillOne[1] = splitSkillOne[1]?.substring(2);
    }
    if (props.Battle_Skill_2) {
        var splitSkillTwo = props.Battle_Skill_2.split(/Lv.1\/Lv.10|Lv.1\/Lv10/);
        splitSkillTwo[1] = splitSkillTwo[1]?.substring(2);
    }

    //determine expertise image
    var expertiseImageSrc;
    if (props.Expertise === "Katana") {
        expertiseImageSrc = "https://i.imgur.com/GzjFDuk.png";
    } else if (props.Expertise === "Magic Tome" || props.Expertise === "Tome") {
        expertiseImageSrc = "https://i.imgur.com/OD93qKZ.png";
    } else if (props.Expertise === "Sword") {
        expertiseImageSrc = "https://i.imgur.com/ATso0Oh.png";
    } else if (props.Expertise === "Greatsword") {
        expertiseImageSrc = "https://i.imgur.com/HSDNq0i.png";
    } else if (props.Expertise === "Lance") {
        expertiseImageSrc = "https://i.imgur.com/ayJUL2b.png";
    } else if (props.Expertise === "Hammer") {
        expertiseImageSrc = "https://i.imgur.com/cjuCnpU.png";
    } else if (props.Expertise === "Fist") {
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
                    <img src={props.Type}
                        className={styles.headerIcon}></img>
                    <span className={styles.charNameText}>{props.Name}</span>
                    <img src={props.Atk_Type}
                        className={styles.headerIcon}></img>
                </div>
                <div
                    className={styles.detailsInnerContainer}>
                    <div className={styles.detailsIconContainer}>
                        <img
                            src={props.Picture}
                            className={styles.detailsIcon}></img>
                        <div className={styles.statsContainer}>
                            <div
                                className={styles.statsBoxes}>
                                <img src={props.Growth_Type}
                                    className={styles.typeIcon}></img>
                                <span className={styles.growthTypeText}>Growth Type</span>
                            </div>
                            <div
                                className={styles.statsBoxes}>
                                <img src="https://i.imgur.com/MLuLYZy.png"
                                    className={styles.typeIcon}></img>
                                <span className={styles.statsText}>{props.Max_HP}</span>
                            </div>
                            <div
                                className={styles.statsBoxes}>
                                <img src="https://i.imgur.com/yduAVsz.png"
                                    className={styles.typeIcon}></img>
                                <span className={styles.statsText}>{props.Max_ATK}</span>
                            </div>
                            <div
                                className={styles.statsBoxes}>
                                <img src="https://i.imgur.com/P4N7gFs.png"
                                    className={styles.typeIcon}></img>
                                <span className={styles.statsText}>{props.Max_DEF}</span>
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
                        <div className={styles.skillText}>{props.Character_Trait_at_5__Awaken_x1}</div>
                        <br></br>
                        <div className={styles.skillText}>{props.Character_Trait_at_5__Awaken_x3}</div>
                    </div>
                </div>
                <div
                    className={styles.detailsInnerContainer}>
                    <div id="secretSkill" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Secret Skill</h1>
                        <div className={styles.townTraitText}>{props.Secret_Skill__Ult_}</div>
                    </div>
                    <div id="townTraits" className={styles.townTraitContainer}>
                        <h1 className={styles.skillHeader}>Town Traits</h1>
                        <div className={styles.townTraitText}>{props.Town_Trait_1}</div>
                        <div className={styles.townTraitText}>{props.Town_Trait_2}</div>
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