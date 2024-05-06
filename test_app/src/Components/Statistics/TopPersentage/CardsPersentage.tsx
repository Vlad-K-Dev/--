import React from 'react';
import CardHeader from './Components/Card';
import styles from './CardsPersentage.module.scss';

const Card = () => {
  const data = [
    {
      title: 'Errors: 0.12%',
      desc: 'Avarages: 0.11%',
    },
    {
      title: 'Zeroes: 5.12%',
      desc: 'Avarages: 0.11%',
    },
    {
      title: 'Timeouts: 0.12%',
      desc: 'Avarages: 0.11%'
    }
  ]
    return (
      <div className={styles.wrapper}>
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <CardHeader title={item.title} desc={item.desc}/>
              </div>

            )
          })
        }
      </div>
    )
}

export default Card