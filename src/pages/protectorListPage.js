import * as React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import * as styles from '../styles/protectorListPage.module.scss'
import { graphql } from 'gatsby'
import ProtectorList from '../components/ProtectorList.js';
import Select from 'react-select';

function ProtectorListPage({ data }) {
    const [filterText, setFilterText] = useState("");
    const [filteredCharacterData, setFilteredCharacterData] = useState([]);
    const [filterProtectorElement,   setfilterProtectorElement] = useState({ 'value': 'all', 'label': 'type', 'icon': "https://i.imgur.com/oD9Pdy7.png", 'default': true });
    const characterData = data?.allSlimerippedProtectionCsv?.nodes || [];

    //read from sessionStorage
    useEffect(() => {
        if(sessionStorage.getItem('filterProtectorElement') !== null && filterProtectorElement.default === true && filterProtectorElement.default){
            setfilterProtectorElement(JSON.parse(sessionStorage.getItem('filterProtectorElement')));
        }
    }, []);

    useEffect(() => {
        setFilteredCharacterData(characterData.filter(item => (item.Name.toLowerCase().includes(filterText.toLowerCase())
            && (item.Main_Type == filterProtectorElement.icon || item._2nd_Type == filterProtectorElement.icon || filterProtectorElement == null || filterProtectorElement.value == "all"))));
        sessionStorage.setItem('filterProtectorElement', JSON.stringify(filterProtectorElement));
    }, [filterText, filterProtectorElement])

    //elements for filter
    const elements = [
        { 'value': 'all', 'label': 'type', 'icon': "https://i.imgur.com/oD9Pdy7.png" },
        { 'value': 'wind', 'label': 'wind', 'icon': "https://i.imgur.com/pQYVkI3.png" },
        { 'value': 'dark', 'label': 'dark', 'icon': "https://i.imgur.com/pzX6NRL.png" },
        { 'value': 'light', 'label': 'light', 'icon': "https://i.imgur.com/hX15sR0.png" },
        { 'value': 'space', 'label': 'space', 'icon': "https://i.imgur.com/z8bnSYg.png" },
        { 'value': 'earth', 'label': 'earth', 'icon': "https://i.imgur.com/AHPti72.png" },
        { 'value': 'fire', 'label': 'fire', 'icon': "https://i.imgur.com/QndVudD.png" },
        { 'value': 'water', 'label': 'water', 'icon': "https://i.imgur.com/NchScWh.png" },
    ]

    return (
        <Container>
            <Header></Header>
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
                        value={filterProtectorElement}
                        onChange={(setfilterProtectorElement)}
                        options={elements}
                        defaultValue={filterProtectorElement}
                        formatOptionLabel={elements => (
                            <div className={styles.elementDropdownOptions}>
                                <img src={elements.icon}
                                    className={styles.dropdownElementIcon}></img>
                                <span className={styles.dropdownElementLabel}>{elements.label}</span>
                            </div>
                        )}>
                    </Select>
                </form>
            </div>
            <ProtectorList characterData={filteredCharacterData} />
        </Container>
    )
}

export default ProtectorListPage

export const ProtectionCharacterQuery = graphql`
query {
    allSlimerippedProtectionCsv {
            nodes {
                Name
                Base_Rarity
                Picture
                Main_Type
                _2nd_Type
                Growth_Type
                Max_HP
                Max_ATK
                Max_DEF
            }
    }
}
`