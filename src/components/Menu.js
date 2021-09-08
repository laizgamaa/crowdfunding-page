import styles from '../styles/components/Menu.module.scss'

import Link from 'next/link'

export function Menu() {
    return(
        <div className={styles.menuContainer}>
            <div className={styles.logo}>
                <img src="logo.svg" alt="Logo" />
            </div>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/">
                        <a>Discover</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/">
                        <a>Get Started</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}