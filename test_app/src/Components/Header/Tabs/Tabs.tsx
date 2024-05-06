import React from 'react';
import {Tabs} from 'antd';
import styles from './Tabs.module.scss'
import useStore from "../../../Store/Store";
import useGetStats from "../../../Store/Store";
import usePixelState from '../../../Store/PixelStore';

const TabsBlock = () => {
    const setCategory = useStore.getState().updateCategory;
    const updatePixels = usePixelState.getState().updateCategory
    const {fetchData, categories} = useGetStats( ({fetchData, categories}) => ({fetchData, categories}))
    const {fetchPixels} =  usePixelState( ({data, fetchPixels }) => ({data, fetchPixels}));

    const tabsData = [
      {
        title: 'Last hour',
        key: 'hour'
      },
      {
        title: 'Today',
        key: 'today'
      },
      {
        title: 'Yesterday',
        key: 'yesterday'
      },
      {
        title: 'Last 3 days',
        key: 'days'
      }
    ];

    return(
        <div className={styles.wrapper}>
            <Tabs
              className={styles.tabs}
              items={
                tabsData.map((item, index) => {
                  return {
                    key: item.key,
                    label: item.title
                  }
                })}
              onChange={(e) => {
                e !== categories &&  setCategory(e)
                e !== categories &&  updatePixels(e)
                fetchData()
                fetchPixels()

              }}/>
        </div>
    )
}

export default TabsBlock