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
    const [filterElement, setFilterElement] = useState({ 'value': 'all', 'label': 'type', 'icon': "https://i.imgur.com/oD9Pdy7.png", 'default': true});
    const [filterWeapon, setFilterWeapon] = useState({ 'value': 'all', 'label': 'weapon', 'icon': "https://i.imgur.com/oD9Pdy7.png", 'default': true });
    const [filterUlt, setFilterUlt] = useState({ 'value': 'any', 'label': 'ult type', 'icon': "https://i.imgur.com/oD9Pdy7.png", 'default': true });
    const [filterTrait, setFilterTrait] = useState({ 'value': 'any', 'label': 'all traits', 'default': true });
    const [filterSkill, setFilterSkill] = useState({ 'value': 'any', 'label': 'all skills', 'default': true });

    const characterData = data?.allSlimerippedCsv?.nodes || [];

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

    //expertise weapon types for filter
    const weapons = [
        { 'value': 'all', 'label': 'weapon', 'icon': "https://i.imgur.com/oD9Pdy7.png" },
        { 'value': 'Katana', 'label': 'Katana', 'icon': "https://i.imgur.com/GzjFDuk.png" },
        { 'value': 'Magic Tome', 'label': 'Magic Tome', 'icon': "https://i.imgur.com/OD93qKZ.png" },
        { 'value': 'Sword', 'label': 'Sword', 'icon': "https://i.imgur.com/ATso0Oh.png" },
        { 'value': 'Greatsword', 'label': 'Greatsword', 'icon': "https://i.imgur.com/HSDNq0i.png" },
        { 'value': 'Lance', 'label': 'Lance', 'icon': "https://i.imgur.com/ayJUL2b.png" },
        { 'value': 'Hammer', 'label': 'Hammer', 'icon': "https://i.imgur.com/cjuCnpU.png" },
        { 'value': 'Fist', 'label': 'Fist', 'icon': "https://i.imgur.com/8YV85Vx.png" },
    ]

    //ult types for filter
    const ultTypes = [
        { 'value': 'any', 'label': 'ult type', 'icon': "https://i.imgur.com/oD9Pdy7.png" },
        { 'value': 'all-target', 'label': 'all target', 'icon': "https://i.imgur.com/oD9Pdy7.png" },
        { 'value': 'single-target', 'label': 'single target', 'icon': "https://i.imgur.com/oD9Pdy7.png" },
    ]

    //awakened traits for filter
    const traits = [
        { 'value': 'any', 'label': 'all traits' },
        { 'value': '- protection', 'label': 'protection' },
        { 'value': '- secret skill', 'label': 'secret skill' },
        { 'value': '- skill', 'label': 'skill points' },
        { 'value': '- critical rate', 'label': 'crit rate' },
        { 'value': '- def up', 'label': 'defense' },
        { 'value': '- guard power', 'label': 'guard power' },
        { 'value': '- guard rate', 'label': 'guard rate' },
        { 'value': '- pierce', 'label': 'pierce' },
        { 'value': '- critical damage', 'label': 'crit damage' },
        { 'value': '- enhance counter', 'label': 'counter' },
        { 'value': '- pierce power', 'label': 'pierce power' },
        { 'value': '- pierce rate', 'label': 'pierce rate' },
        { 'value': '- atk', 'label': 'attack' },
    ]

    //skills for filter
    const skills = [
        { 'value': 'any', 'label': 'all skills' },
        { 'value': 'changes soul of skill', 'double': 'and soul of skill', 'spec': 'to soul of divine', 'label': 'green->blue' },
        { 'value': 'changes soul of secret', 'double': 'and soul of secret', 'spec': 'to soul of divine', 'label': 'orange->blue' },
        { 'value': 'changes soul of divine', 'double': 'and soul of divine', 'spec': 'to soul of skill', 'label': 'blue->green' },
        { 'value': 'changes soul of secret', 'double': 'and soul of secret', 'spec': 'to soul of skill', 'label': 'orange->green' },
        { 'value': 'changes soul of skill', 'double': 'and soul of skill', 'spec': 'to soul of secret', 'label': 'green->orange' },
        { 'value': 'changes soul of divine', 'double': 'and soul of divine', 'spec': 'to soul of secret', 'label': 'blue->orange' },
        { 'value': 'increases all allies\' def', 'spec': '', 'label': 'defense up' },
        { 'value': 'increases own atk', 'spec': '', 'label': 'self attack up' },
        { 'value': 'increases all allies\' atk', 'spec': '', 'label': 'ally attack up' },
        { 'value': 'heals self', 'spec': '', 'label': 'self heal' },
        { 'value': 'heals', 'spec': 'all', 'label': 'heal allies' },
        { 'value': 'increases own pierce', 'spec': 'rate', 'label': 'self pierce up' },
        { 'value': 'increases all allies\' pierce rate', 'spec': '', 'label': 'ally pierce up' },
        { 'value': 'transfers', 'spec': 'soul orb', 'label': 'orb transfer' },
        { 'value': 'increases all allies\' pierce resistance', 'spec': '', 'label': 'ally pierce resist' },
        { 'value': 'increases own crit', 'spec': 'rate', 'label': 'self crit up' },
        { 'value': 'increases all allies\' crit', 'spec': 'rate', 'label': 'ally crit up' },
        { 'value': 'increases all allies\' crit', 'spec': 'resistance', 'label': 'ally crit resist' },
    ]

    //read from sessionStorage
    useEffect(() => {
        if(sessionStorage.getItem('filterElement') !== null && filterElement.default === true && filterElement.default){
            setFilterElement(JSON.parse(sessionStorage.getItem('filterElement')));
        }
        if(sessionStorage.getItem('filterWeapon') !== null && filterWeapon.default === true && filterWeapon.default){
            setFilterWeapon(JSON.parse(sessionStorage.getItem('filterWeapon')));
        }
        if(sessionStorage.getItem('filterTrait') !== null && filterTrait.default === true && filterTrait.default){
            setFilterTrait(JSON.parse(sessionStorage.getItem('filterTrait')));
        }
        if(sessionStorage.getItem('filterUlt') !== null && filterUlt.default === true && filterUlt.default){
            setFilterUlt(JSON.parse(sessionStorage.getItem('filterUlt')));
        }
        if(sessionStorage.getItem('filterSkill') !== null && filterSkill.default === true && filterSkill.default){
            setFilterSkill(JSON.parse(sessionStorage.getItem('filterSkill')));
        }
    }, []);

    useEffect(() => {
        setFilteredCharacterData(characterData.filter(item => (item.Name.toLowerCase().includes(filterText.toLowerCase())
            && (item.Type == filterElement.icon || filterElement == null || filterElement.value == "all"))
            && (item.Expertise == filterWeapon.value || filterWeapon == null || filterWeapon.value == "all")
            && (item.Character_Trait_at_5__Awaken_x1?.toLowerCase().includes(filterTrait.value) || filterTrait == null || filterTrait.value == "any")
            && (item.Secret_Skill__Ult_?.toLowerCase().includes(filterUlt.value) || filterUlt == null || filterUlt.value == "any")
            && (((item.Battle_Skill_1?.toLowerCase().includes(filterSkill.value) || item.Battle_Skill_1?.toLowerCase().includes(filterSkill.double)) && item.Battle_Skill_1?.toLowerCase().includes(filterSkill.spec))
                || ((item.Battle_Skill_2?.toLowerCase().includes(filterSkill.value) || item.Battle_Skill_2?.toLowerCase().includes(filterSkill.double)) && item.Battle_Skill_2?.toLowerCase().includes(filterSkill.spec))
                || filterSkill == null || filterSkill.value == "any")));
        sessionStorage.setItem("filterElement", JSON.stringify(filterElement));
        sessionStorage.setItem("filterWeapon", JSON.stringify(filterWeapon));
        sessionStorage.setItem("filterTrait", JSON.stringify(filterTrait));
        sessionStorage.setItem("filterUlt", JSON.stringify(filterUlt));
        sessionStorage.setItem("filterSkill", JSON.stringify(filterSkill));
    }, [filterText, filterElement, filterWeapon, filterUlt, filterTrait, filterSkill])

    //helper func to reset filters
    function resetFilters(e) {
        e.preventDefault();
        setFilterElement({ 'value': 'all', 'label': 'type', 'icon': "https://i.imgur.com/oD9Pdy7.png"});
        setFilterWeapon({ 'value': 'all', 'label': 'weapon', 'icon': "https://i.imgur.com/oD9Pdy7.png"});
        setFilterUlt({ 'value': 'any', 'label': 'ult type', 'icon': "https://i.imgur.com/oD9Pdy7.png"});
        setFilterTrait({ 'value': 'any', 'label': 'all traits'});
        setFilterSkill({ 'value': 'any', 'label': 'all skills'});
    }

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
                    <button className={styles.resetButton}
                        onClick={resetFilters}>
                        Reset
                    </button>
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
                    <Select className={styles.ultDropdown}
                        isSearchable={false}
                        value={filterTrait}
                        onChange={(setFilterTrait)}
                        options={traits}
                        defaultValue={filterTrait}
                        formatOptionLabel={traits => (
                            <div className={styles.ultDropdownOptions}>
                                <span className={styles.dropdownElementLabel}>{traits.label}</span>
                            </div>
                        )}>
                    </Select>
                    <Select className={styles.ultDropdown}
                        isSearchable={false}
                        value={filterSkill}
                        onChange={(setFilterSkill)}
                        options={skills}
                        defaultValue={filterSkill}
                        getOptionValue={option => option.label}
                        formatOptionLabel={skills => (
                            <div className={styles.skillDropdownOptions}>
                                <span className={styles.dropdownElementLabel}>{skills.label}</span>
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