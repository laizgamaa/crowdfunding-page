import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'

import { Menu } from '../components/Menu'

export function Header() {
    return(
        <div className={styles.headerContainer}>
            <Menu />
            <picture>
                <source 
                    media="(max-width: 760px)"
                    srcSet="/image-hero-mobile.jpg"/>
				<img src="/image-hero-desktop.jpg" />
            </picture>
        </div>
    )
}