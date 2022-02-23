import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './header.module.css'
import { useState } from 'react'
import CharacterList from './characterList';

function Header({ inputPage }) {
    const [page, setPage] = useState(inputPage ? inputPage : 'Home');

    return (
        <div id='header'>
            <div
                className={styles.container}
            >
                <nav>
                    <div
                        className={styles.navHeader}
                    >
                        <a
                            className={styles.headerItem}
                            onClick={() => setPage('Home')}
                        >
                            <span
                                className={styles.headerItemText}>
                                Home
                            </span>
                        </a>
                        <a
                            className={styles.headerItem}
                            onClick={() => setPage('About')}
                        >
                            <span
                                className={styles.headerItemText}>
                                About
                            </span>
                        </a>
                        <a
                            className={styles.headerItem}
                            onClick={() => setPage('Characters')}
                        >
                            <span
                                className={styles.headerItemText}>
                                Characters
                            </span>
                        </a>
                        <a
                            className={styles.headerItem}
                            onClick={() => setPage('Items')}
                        >
                            <span
                                className={styles.headerItemText}>
                                Items
                            </span>
                        </a>
                    </div>
                </nav>
                <h1
                    className={styles.title}
                >
                    Slime: Isekai Memories Stats
                </h1>
                <div>
                    {page == 'Characters' && (
                        <CharacterList></CharacterList>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header