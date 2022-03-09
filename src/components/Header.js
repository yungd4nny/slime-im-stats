import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/header.module.scss'
import { useState } from 'react'
import CharacterList from './CharacterList';

function Header({ inputPage }) {
    const [page, setPage] = useState(inputPage ?? 'Home');

    return (
        <div>
            <div
                id='header'
                className={styles.container}
            >
                <nav
                    className={styles.nav}>
                    <div
                        className={styles.navHeader}
                    >
                        <div
                            className={styles.headerItem}
                            onClick={() => setPage('Home')}
                        >
                            <Link to="/"
                                className={styles.headerItemText}>
                                Home
                            </Link>
                        </div>
                        <div
                            className={styles.headerItem}
                            onClick={() => setPage('About')}
                        >
                            <Link to="/aboutPage"
                                className={styles.headerItemText}>
                                About
                            </Link>
                        </div>
                        <div
                            className={styles.headerItem}
                        >
                            <Link to="/characterListPage"
                                className={styles.headerItemText}>
                                Characters
                            </Link>
                        </div>
                        <div
                            className={styles.headerItem}
                        >
                            <Link to="/protectorListPage"
                                className={styles.headerItemText}>
                                Protectors
                            </Link>
                        </div>
                        <div
                            className={styles.headerItem}
                            onClick={() => setPage('Items')}
                        >
                            <Link to="/itemsPage"
                                className={styles.headerItemText}>
                                Items
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* <h1
                    className={styles.title}
                >
                    Slime: Isekai Memories Stats
                </h1> */}

            </div>
            <div>
                {page == 'Characters' && (
                    <CharacterList></CharacterList>
                )}
            </div>

        </div>
    )
}

export default Header
