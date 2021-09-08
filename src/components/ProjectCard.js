import styles from '../styles/components/ProjectCard.module.scss'

export function ProjectCard() {
    return(
        <div className={styles.projectCardContainer}>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful and handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className={styles.supportButtons}>
                <button className={`${styles.backThisButton} btn`}>Back this project</button>
                <input className={styles.bookmark} type="checkbox" id="switch" /><label htmlFor="switch">Bookmark</label>
            </div>
        </div>
    )
}