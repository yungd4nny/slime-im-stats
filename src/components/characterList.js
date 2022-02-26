import * as React from 'react'
import * as charListStyles from "./characterList.module.css"
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
                            name={item.Name}
                            imageUrl={item.Picture}
                            baseRarity={item.Base_Rarity}
                            atkType={item.Atk_Type}
                            type={item.Type}
                        >
                        </CharacterTile>
                    )
                })
            }
        </div >
    )
}

export default CharacterList