import * as React from 'react'
import CharacterList from '../components/CharacterList'
import Header from '../components/Header'
import { graphql } from 'gatsby'
import { Container } from '../components/PageContainer';
import { useState, useEffect } from 'react'
import * as styles from '../styles/characterListPage.module.scss'
import Select from 'react-select'

function CharacterListPage({ data }) {
    const [filterText, setFilterText] = useState("");
    const [filteredCharacterData, setFilteredCharacterData] = useState([]);
    const [filterElement, setFilterElement] = useState({ value: 'all', label: 'type', icon: "https://i.imgur.com/oD9Pdy7.png" });
    const [filterWeapon, setFilterWeapon] = useState({ value: 'all', label: 'weapon', icon: "https://i.imgur.com/oD9Pdy7.png" });
    const [filterUlt, setFilterUlt] = useState({ value: 'any', label: 'any', icon: "https://i.imgur.com/oD9Pdy7.png" });

    const characterData = data?.allSlimerippedCsv?.nodes || [];

    //elements for filter
    const elements = [
        { value: 'all', label: 'type', icon: "https://i.imgur.com/oD9Pdy7.png" },
        { value: 'wind', label: 'wind', icon: "https://i.imgur.com/pQYVkI3.png" },
        { value: 'dark', label: 'dark', icon: "https://i.imgur.com/pzX6NRL.png" },
        { value: 'light', label: 'light', icon: "https://i.imgur.com/hX15sR0.png" },
        { value: 'space', label: 'space', icon: "https://i.imgur.com/z8bnSYg.png" },
        { value: 'earth', label: 'earth', icon: "https://i.imgur.com/AHPti72.png" },
        { value: 'fire', label: 'fire', icon: "https://i.imgur.com/QndVudD.png" },
        { value: 'water', label: 'water', icon: "https://i.imgur.com/NchScWh.png" },
    ]

    //expertise weapon types for filter
    const weapons = [
        { value: 'all', label: 'weapon', icon: "https://i.imgur.com/oD9Pdy7.png" },
        { value: 'Katana', label: 'Katana', icon: "https://i.imgur.com/GzjFDuk.png" },
        { value: 'Magic Tome', label: 'Magic Tome', icon: "https://i.imgur.com/OD93qKZ.png" },
        { value: 'Sword', label: 'Sword', icon: "https://i.imgur.com/ATso0Oh.png" },
        { value: 'Greatsword', label: 'Greatsword', icon: "https://i.imgur.com/HSDNq0i.png" },
        { value: 'Lance', label: 'Lance', icon: "https://i.imgur.com/ayJUL2b.png" },
        { value: 'Hammer', label: 'Hammer', icon: "https://i.imgur.com/cjuCnpU.png" },
        { value: 'Fist', label: 'Fist', icon: "https://i.imgur.com/8YV85Vx.png" },
    ]

    //ult types for filter
    const ultTypes = [
        { value: 'any', label: 'any', icon: "https://i.imgur.com/oD9Pdy7.png" },
        { value: 'all-target', label: 'all target', icon: "https://i.imgur.com/oD9Pdy7.png" },
        { value: 'single-target', label: 'single target', icon: "https://i.imgur.com/oD9Pdy7.png" },
    ]

    useEffect(() => {
        setFilteredCharacterData(characterData.filter(item => (item.Name.toLowerCase().includes(filterText.toLowerCase())
            && (item.Type == filterElement.icon || filterElement == null || filterElement.value == "all"))
            && (item.Expertise == filterWeapon.value || filterWeapon == null || filterWeapon.value == "all")
            && (item.Secret_Skill__Ult_.toLowerCase().includes(filterUlt.value) || filterUlt == null || filterUlt.value == "any")))
    }, [filterText, filterElement, filterWeapon, filterUlt])
    return (
        <Container>
            <Header>
            </Header>
            <div className={styles.filterBar}>
                <form className={styles.formStyle}>
                    <input
                        type="text"
                        value={filterText}
                        placeholder="Search for character"
                        onChange={(e) => setFilterText(e.target.value)}
                        className={styles.searchBox}></input>
                    <Select className={styles.elementDropdown}
                        isSearchable={false}
                        value={filterElement}
                        onChange={(setFilterElement)}
                        options={elements}
                        defaultValue={filterElement}
                        formatOptionLabel={elements => (
                            <div className={styles.elementDropdownOptions}>
                                <img src={elements.icon}
                                    className={styles.dropdownElementIcon}></img>
                                <span className={styles.dropdownElementLabel}>{elements.label}</span>
                            </div>
                        )}>
                    </Select>
                    <Select className={styles.weaponDropdown}
                        isSearchable={false}
                        value={filterWeapon}
                        onChange={(setFilterWeapon)}
                        options={weapons}
                        defaultValue={filterWeapon}
                        formatOptionLabel={weapons => (
                            <div className={styles.weaponDropdownOptions}>
                                <img src={weapons.icon}
                                    className={styles.dropdownElementIcon}></img>
                                <span className={styles.dropdownElementLabel}>{weapons.label}</span>
                            </div>
                        )}>
                    </Select>
                    <Select className={styles.ultDropdown}
                        isSearchable={false}
                        value={filterUlt}
                        onChange={(setFilterUlt)}
                        options={ultTypes}
                        defaultValue={filterUlt}
                        formatOptionLabel={ultTypes => (
                            <div className={styles.ultDropdownOptions}>
                                <img src={ultTypes.icon}
                                    className={styles.dropdownElementIcon}></img>
                                <span className={styles.dropdownElementLabel}>{ultTypes.label}</span>
                            </div>
                        )}>
                    </Select>
                </form>

            </div >
            <CharacterList characterData={filteredCharacterData}>
            </CharacterList>
        </Container >
    )
}

export default CharacterListPage

export const BattleCharacterQuery = graphql`
query {
    allSlimerippedCsv {
            nodes {
                Name
                Base_Rarity
                Atk_Type
                Picture
                Type
                Growth_Type
                Max_HP
                Max_ATK
                Max_DEF
                Battle_Skill_1
                Battle_Skill_2
                Town_Trait_1
                Town_Trait_2
                Character_Trait_at_5__Awaken_x1
                Character_Trait_at_5__Awaken_x3
                Secret_Skill__Ult_
                Expertise
            }
    }
}
`