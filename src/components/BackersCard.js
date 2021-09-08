import styles from '../styles/components/BackersCard.module.scss'

export function BackersCard() {
    return(
        <div className={styles.backersCardContainer}>
            <div className={styles.amountList}>
                <div className={styles.singleAmount}>
                    <span className={styles.totalNumber}>$89,914</span>
                    <span className={styles.label}>of $100,000 backed</span>
                </div>
                <div className={styles.singleAmount}>
                    <span className={styles.totalNumber}>5,007</span>
                    <span className={styles.label}>total backers</span>
                </div>
                <div className={styles.singleAmount}>
                    <span className={styles.totalNumber}>56</span>
                    <span className={styles.label}>days left</span>
                </div>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.completeBar}>
                    <div className={styles.barInProgress} style={{ width: '80%' }} />
                </div>
            </div>
        </div>
    )
}