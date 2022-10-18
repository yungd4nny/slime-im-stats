
import * as React from 'react'
import { useState, useEffect } from 'react'
import * as styles from '../styles/towerView.module.scss'
import Select from 'react-select';

function TowerView() {
    const [towerFloor, setTowerFloor] = useState({ id: 1, image: 'https://i.imgur.com/NixvKgq.png' });
    const [floorImage, setFloorImage] = useState('https://i.imgur.com/NixvKgq.png');

    const floors = [
        { id: 1, image: 'https://i.imgur.com/NixvKgq.png' },
        { id: 2, image: 'https://i.imgur.com/S9ydZdm.png' },
        { id: 3, image: 'https://i.imgur.com/ddgPMjw.png' },
        { id: 4, image: 'https://i.imgur.com/b2BkHST.png' },
        { id: 5, image: 'https://i.imgur.com/sLf7H5t.png' },
        { id: 6, image: 'https://i.imgur.com/72vhd32.png' },
        { id: 7, image: 'https://i.imgur.com/vfCc8Mb.png' },
        { id: 8, image: 'https://i.imgur.com/LwE0Ql4.png' },
        { id: 9, image: 'https://i.imgur.com/hX4h4Xc.png' },
        { id: 10, image: 'https://i.imgur.com/bW9P06J.png' },
        { id: 11, image: 'https://i.imgur.com/AOPgWsF.png' },
        { id: 12, image: 'https://i.imgur.com/AO07St6.png' },
        { id: 13, image: 'https://i.imgur.com/zGNston.png' },
        { id: 14, image: 'https://i.imgur.com/tj6ysO4.png' },
        { id: 15, image: 'https://i.imgur.com/9PoqaE6.png' },
        { id: 16, image: 'https://i.imgur.com/9sEskkV.png' },
        { id: 17, image: 'https://i.imgur.com/GF3SPGU.png' },
        { id: 18, image: 'https://i.imgur.com/7yS5rqI.png' },
        { id: 19, image: 'https://i.imgur.com/zLvCa6E.png' },
        { id: 20, image: 'https://i.imgur.com/rUIt2Wp.png' },
        { id: 21, image: 'https://i.imgur.com/HsvtsfY.png' },
        { id: 22, image: 'https://i.imgur.com/yEUsyhF.png' },
        { id: 23, image: 'https://i.imgur.com/cVII80H.png' },
        { id: 24, image: 'https://i.imgur.com/GXvR1t3.png' },
        { id: 25, image: 'https://i.imgur.com/O6gcAIJ.png' },
        { id: 26, image: 'https://i.imgur.com/WiGNbO8.png' },
        { id: 27, image: 'https://i.imgur.com/LPNN3ei.png' },
        { id: 28, image: 'https://i.imgur.com/jdUsCJM.png' },
        { id: 29, image: 'https://i.imgur.com/BLSwH9R.png' },
        { id: 30, image: 'https://i.imgur.com/c4upvyv.png' }

    ]

    useEffect(() => {
        floors.map((item) => {
            if (item.id === towerFloor.id) {
                setFloorImage(item.image)
            }
        })
    }, [towerFloor]);

    function incrementFloor() {
        if (towerFloor.id < 30) {
            setTowerFloor(floors[towerFloor.id])
        }
    };

    function decrementFloor() {
        if (towerFloor.id > 1) {
            setTowerFloor(floors[towerFloor.id - 2])
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" className={styles.changeFloorArrow} onClick={() => decrementFloor()}>
                    <img src='https://imgur.com/wdGuzhH.png' style={{ transform: 'rotate(-90deg)', height: '60px', width: '80px' }}></img>
                </button>
                <Select className={styles.elementDropdown}
                    options={floors}
                    value={towerFloor}
                    onChange={(setTowerFloor)}
                    defaultValue={towerFloor}
                    isSearchable={false}
                    getOptionValue={(towerFloor) => towerFloor}
                    formatOptionLabel={floors => (
                        <div className={styles.elementDropdownOptions}>
                            <span className={styles.towerViewHeader}>Floor {floors.id}</span>
                        </div>
                    )} />
                <button type="button" className={styles.changeFloorArrow} onClick={() => incrementFloor()}>
                    <img src='https://imgur.com/wdGuzhH.png' style={{ transform: 'rotate(90deg)', height: '60px', width: '80px' }}></img>
                </button>
            </div>
            <div style={{ margin: 'auto',display: 'block', height: '1080px', width: '2200px', position: 'relative', overflow: 'hidden' }}>
                <img src={floorImage} style={{ objectFit: 'cover', marginLeft: '-150px' }}></img>
            </div>
        </div>
    )
}

export default TowerView;