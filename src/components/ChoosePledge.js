import React, { useState } from 'react'

import styles from '../styles/components/ChoosePledge.module.scss'

export function ChoosePledge() {
    return(
        <>
            <div className={styles.pledgeContainer}>
                <form>
                    <div className={styles.pledgeCard}>
                        <div className={styles.pledgeHeader}>
                            <span className={styles.title}>Bamboo Stand</span>
                            <span className={styles.pledge}>Pledge $25</span>
                            <span className={styles.amountLeft}>
                                <strong>101</strong>
                                <small>left</small>
                            </span>
                        </div>
                        <div className={styles.radio}>
                            <label>
                                <input type="radio" />
                                You get an ergonomic stand made of natural bamboo.
                                You've helped us launch our promotional campaign, and
                                you’ll be added to a special Backer member list.
                            </label>
                        </div>
                    </div>
                    
                    <div className={styles.pledgeCard}>
                        <div className={styles.pledgeHeader}>
                            <span className={styles.title}>Black Edition Stand</span>
                            <span className={styles.pledge}>Pledge $75</span>
                            <span className={styles.amountLeft}>
                                <strong>64</strong>
                                <small>left</small>
                            </span>
                        </div>
                        <div className={styles.radio}>
                            <label>
                                <input type="radio" />
                                You get a Black Special Edition computer stand
                                and a personal thank you. You’ll be added to
                                our Backer member list. Shipping is included.
                            </label>
                        </div>
                    </div>
                    
                    <div className={styles.pledgeCard}>
                        <div className={styles.pledgeHeader}>
                            <span className={styles.title}>Mahogany Special Edition</span>
                            <span className={styles.pledge}>Pledge $200</span>
                            <span className={styles.amountLeft}>
                                <strong>5</strong>
                                <small>left</small>
                            </span>
                        </div>
                        <div className={styles.radio}>
                            <label>
                                <input type="radio" />
                                You get two Special Edition Mahogany stands,
                                a Backer T-Shirt, and a personal thank you.
                                You’ll be added to our Backer member list.
                                Shipping is included.
                            </label>
                        </div>
                    </div>
            
                    <button
                        className={`${styles.finishButton} btn`}
                        type="submit"
                        // disabled={!value}
                    >
                        Continue
                    </button>
                </form>
            </div>
        </>
    )
}