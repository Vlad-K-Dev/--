import React from 'react';
import styles from './Title.module.scss';

const Title = () => {
    return(
        <div className={styles.wrapper}>
            <span className={styles.title}>
                Main metrics
            </span>
        </div>
    )
}

export default Title;