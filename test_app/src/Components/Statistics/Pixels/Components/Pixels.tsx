import React from 'react';
import styles from './Pixels.module.scss'
import {Flex} from 'antd'

type iStyles = {
  pixel: string
}
type iPixel = {
    error500: string,
    error501: string,
    error502: string,
    errorOther: string,
}

const Pixel = (props: iPixel) => {
  return (
    <Flex>
      <div className={styles.pixelCard}>
        <span className={styles.error}>
          <span className={styles.pixel}>

          </span>
          &nbsp;
          Error 500: {props.error500}&nbsp;
        </span>
        <span className={styles.error}>
          <span className={styles.pixel}>

          </span>
          &nbsp;
          Error 501: {props.error501}&nbsp;
        </span>
        <span className={styles.error}>
          <span className={styles.pixel}>

          </span>
          &nbsp;
          Error 502: {props.error502}&nbsp;
        </span>
        <span className={styles.error}>
          <span className={styles.pixel}>

          </span>
          &nbsp;
          Other: {props.errorOther}
        </span>
      </div>
    </Flex>
  )
}

export default Pixel;