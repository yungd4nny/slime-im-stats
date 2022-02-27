import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './header.module.scss'
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
                        <a
                            className={styles.headerItem}
                            onClick={() => setPage('Home')}
                        >
                            <Link to="/"
                                className={styles.headerItemText}>
                                Home
                            </Link>
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
                        >
                            <Link to="/characterListPage"
                                className={styles.headerItemText}>
                                Characters
                            </Link>
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