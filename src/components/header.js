import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({ pageTitle, children }) => {


    return (
        <div>
            <div
                className={styles.container}
            >
                <nav>
                    <div
                        className={styles.navHeader}
                    >
                        <a className={styles.headerItem}>
                            <Link to="/"
                                className={styles.headerItemText}>
                                Home
                            </Link>
                        </a>
                        <a className={styles.headerItem}>
                            <Link to="/about"
                                className={styles.headerItemText}>
                                About
                            </Link>
                        </a>
                        <a className={styles.headerItem}>
                            <Link to="/char"
                                className={styles.headerItemText}>
                                Characters
                            </Link>
                        </a>
                        <a className={styles.headerItem}>
                            <Link to="/items"
                                className={styles.headerItemText}>
                                Items
                            </Link>
                        </a>
                    </div>
                </nav>
                <h1
                    className={styles.title}
                >
                    {pageTitle}
                </h1>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Header