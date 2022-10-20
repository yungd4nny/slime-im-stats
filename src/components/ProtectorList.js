import * as React from 'react'
import * as charListStyles from "../styles/characterList.module.css"
import ProtectorTile from './ProtectorTile'
import { Scrollbars } from 'react-custom-scrollbars-2';

function ProtectorList({ characterData }) {
    return (
        <div
            className={charListStyles.charListScroll}>
            <div
                id='ProtectorList'
                className={charListStyles.charList}
            >
                {characterData?.map((item, index) => (
                    <ProtectorTile
                        id={index}
                        key={index}
                        name={item.Name} />
                ))}
            </div>
        </div>
    )
}

export default ProtectorList;