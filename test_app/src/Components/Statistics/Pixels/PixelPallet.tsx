import React, {useEffect} from "react";
import usePixelState from '../../../Store/PixelStore';
import Pixel from "./Components/Pixels";
import styles from './PixelPallet.module.scss'

const PixelsPallet = () => {
  const {data, fetchPixels, categories} = usePixelState( ({data, fetchPixels,categories }) => ({data, fetchPixels,categories}));

  useEffect(() => fetchPixels, [categories]);

  if(!data) return null
  return (
    <div className={styles.wrapper}>
      {
        data.map((items) => {
          return (
            <Pixel {...items}/>
          )
        })
      }
    </div>
  )
}

export default PixelsPallet;