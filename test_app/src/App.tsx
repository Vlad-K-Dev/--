import React, {useEffect} from "react";
import { Layout, Row, Col } from 'antd';
import HeaderBlock  from './Components/Header/index'
import styles from './App.module.scss';
import CardsPallet from './Components/Statistics/CardsStatistics/Modules/CardsPallet';
import Progress from "./Components/Statistics/Graph";
import useGetStats from "./Store/Store";
import PixelsPallet from "./Components/Statistics/Pixels/PixelPallet";


function App() {
  const {fetchData} = useGetStats( ({fetchData}) => ({fetchData}))
  useEffect(() => fetchData, [])

  return (
    <div className="App">
      <Layout className={styles.layout}>
        <Row gutter={[8, 8]} className={styles.wrapper}>
          <Col span={14} >
          <HeaderBlock/>
          <Progress/>
          <PixelsPallet/>
          <CardsPallet/>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
