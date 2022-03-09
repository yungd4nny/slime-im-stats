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
    const [filterElement, setFilterElement] = useState({ value: 'all', label: 'all', icon: "https://i.imgur.com/oD9Pdy7.png" });

    const characterData = data?.allSlimerippedCsv?.nodes || [];

    const elements = [
        { value: 'all', label: 'all', icon: "https://i.imgur.com/oD9Pdy7.png" },
        { value: 'wind', label: 'wind', icon: "https://i.imgur.com/pQYVkI3.png" },
        { value: 'dark', label: 'dark', icon: "https://i.imgur.com/pzX6NRL.png" },
        { value: 'light', label: 'light', icon: "https://i.imgur.com/hX15sR0.png" },
        { value: 'space', label: 'space', icon: "https://i.imgur.com/z8bnSYg.png" },
        { value: 'earth', label: 'earth', icon: "https://i.imgur.com/AHPti72.png" },
        { value: 'fire', label: 'fire', icon: "https://i.imgur.com/QndVudD.png" },
        { value: 'water', label: 'water', icon: "https://i.imgur.com/NchScWh.png" },
    ]
    console.log(elements[0].value)
    useEffect(() => {
        setFilteredCharacterData(characterData.filter(item => (item.Name.toLowerCase().includes(filterText.toLowerCase()) && (item.Type == filterElement.icon || filterElement == null || filterElement.value == "all"))))
    }, [filterText, filterElement])
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