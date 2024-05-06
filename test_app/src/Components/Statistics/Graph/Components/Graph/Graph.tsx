import React, {useEffect, useState} from 'react';
import { Flex, Progress, Tooltip } from 'antd';
import styles from './Graph.module.scss'

type iGraphData = {
  [key: string]: {
    width: number
    color: string,

  }

}

const Graph = () => {
  const dataGraph:({ color: string; width: number; value: number })[] = [
    {
      width: 45,
      color: '#FFC647',
      value: 45
    },
    {
      width: 22,
      color: '#5220DD',
      value: 22
    },
    {
      width: 22,
      color: '#17C6E9',
      value: 22
    },
    {
      width: 10,
      color: '#6A716F',
      value: 10
    },

  ]

  return (
    <Flex>
        {
          dataGraph.map((item) => {
            return (
              <span
                className={styles.progressBar}
                // className={"progress-bar" + item.color}
                role="progressbar"
                style={{
                  width: `${item.width}%`,
                  background: item.color,
                }}
                aria-valuenow={item.value}
                aria-valuemin={0}
                aria-valuemax={100}>
              </span>
            )
          })
        }
    </Flex>




  )
}

export default Graph;