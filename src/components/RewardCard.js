import styles from '../styles/components/RewardCard.module.scss'
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { MyModal } from './Modal';
import { ChoosePledge } from './ChoosePledge';

export function RewardCard() {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    return(
        <>
            <div className={styles.rewardsList}>
                <div className={styles.rewardContainer}>
                    <div className={styles.rewardHeader}>
                        <span className={styles.title}>Bamboo Stand</span>
                        <span className={styles.pledge}>Pledge $25</span>
                    </div>
                    <p>
                        You get an ergonomic stand made of natural bamboo.
                        You've helped us launch our promotional campaign, and 
                        you’ll be added to a special Backer member list.
                    </p>
                    <div className={styles.rewardFooter}>
                        <span>
                            <strong>101</strong>
                            <small>left</small>
                        </span>
                        <button
                            className={`${styles.selectButton} btn`}
                            onClick={onOpenModal}
                            
                        >
                            Select Reward
                        </button>
                    </div>
                </div>

                <div className={styles.rewardContainer}>
                    <div className={styles.rewardHeader}>
                        <span className={styles.title}>Black Edition Stand</span>
                        <span className={styles.pledge}>Pledge $75</span>
                    </div>
                    <p>
                        You get a Black Special Edition computer stand
                        and a personal thank you. You’ll be added to
                        our Backer member list. Shipping is included.
                    </p>
                    <div className={styles.rewardFooter}>
                        <span>
                            <strong>64</strong>
                            <small>left</small>
                        </span>
                        <button
                            className={`${styles.selectButton} btn`}
                            onClick={onOpenModal}
                            
                        >
                            Select Reward
                        </button>
                    </div>
                </div>

                <div className={styles.rewardContainer}>
                    <div className={styles.rewardHeader}>
                        <span className={styles.title}>Mahogany Special Edition</span>
                        <span className={styles.pledge}>Pledge $200</span>
                    </div>
                    <p>
                        You get two Special Edition Mahogany stands,
                        a Backer T-Shirt, and a personal thank you.
                        You’ll be added to our Backer member list.
                        Shipping is included.
                    </p>
                    <div className={styles.rewardFooter}>
                        <span>
                            <strong>5</strong>
                            <small>left</small>
                        </span>
                        <button
                            className={`${styles.selectButton} btn`}
                            onClick={onOpenModal}
                            
                        >
                            Select Reward
                        </button>
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={onCloseModal}
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                >
                    <h2>Back this project</h2>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    
                    <ChoosePledge />

                </Modal>
            </div>
        </>
    )
}