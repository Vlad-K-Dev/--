import React from 'react';
import { Card, Badge } from 'antd';
import styles from './Card.module.scss'

type iCard = {
  title: string,
  desc: string
}

const CardData = (props:iCard) => {
    const {title, desc} = props;
    return (
        <div className={styles.wrapper}>
          <div className={styles.circle}></div>
          <Card
            className={styles.card}
            title={title}>
            {desc}
          </Card>
        </div>

    )
}

export default CardData