import * as React from 'react'
import * as charListStyles from "../styles/characterList.module.css"
import CharacterTile from './CharacterTile'

function CharacterList({ characterData }) {
    return (
        <div
            id='CharList'
            className={charListStyles.charList}
        >
            {
                characterData?.map((item, index) => {
                    return (
                        <CharacterTile
                            id={index}
                            key={index}
                            name={item.Name}
                            imageUrl={item.Picture}
                            baseRarity={item.Base_Rarity}
                            atkType={item.Atk_Type}
                            type={item.Type}
                            growthType={item.Growth_Type}
                            maxHp={item.Max_HP}
                            maxAtk={item.Max_ATK}
                            maxDef={item.Max_DEF}
                            battleSkillOne={item.Battle_Skill_1}
                            battleSkillTwo={item.Battle_Skill_2}
                            townTraitOne={item.Town_Trait_1}
                            townTraitTwo={item.Town_Trait_2}
                        >
                        </CharacterTile>
                    )
                })
            }
        </div >
    )
}

export default CharacterList
