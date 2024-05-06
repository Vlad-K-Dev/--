import React from 'react';
import { Badge, Row, Col } from 'antd';
import styles from "./CardStatistics.module.scss"


interface iContent {
  name: string,
  value?: string,
}
interface iLinks {
  name: string,
  url?: string
}

interface iStatData  {
  name: string | null,
  percent: string | null,
  yesterday: string | null,
  lastFriday: string | null,
  content: iContent,
  mobTraffic: string | null,
  webTraffic: string | null,
  ctr: string | null,
  str: string | null,
  avgCheck: string | null,
  description: string | null,
  links: iLinks
}

const CardStatistics = (props:iStatData) => {
  const traffic = Object.values(props.content)
  const links = Object.values(props.links)

  return (
    <div className={styles.wrapper}>
      <Row gutter={12}>
        <Col span={12}>
          <div className={styles.title}>
            <h2>{props.name}</h2> &nbsp;
            <Badge count={props.percent}/>
          </div>
          <div>
            {props.yesterday} <span>Yesterday</span>
          </div>
          <div>
            {props.lastFriday} <span>Last friday</span>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.stats}>
            {
              traffic.map(item => {
                return (
                  <div className={styles.rightStats}>
                    <span className={styles.traffic}>{item.name}</span>
                    <span className={styles.percent}>&nbsp;{item.value}</span>
                  </div>
                )
              })
            }
          </div>
          <div className={styles.description}>
            {props.description}
          </div>
          <div className={styles.help}>
            <span>Help:&nbsp; </span>
            <span>
              {
                links.map(item => {
                    return(
                      <a href={item.url}>{item.name}&nbsp;</a>
                    )
                })
              }
            </span>
          </div>
        </Col>
      </Row>
    </div>

 )
}

export default CardStatistics;