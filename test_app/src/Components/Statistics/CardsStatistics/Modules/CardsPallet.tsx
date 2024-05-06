import React, {useEffect, useCallback} from "react";
import CardStatistics from '../Components/CardStatistics';
import useGetStats from "../../../../Store/Store";


const CardsPallet = () => {
    const {data} = useGetStats( ({data}) => ({data}))
    return (
        <div>
              {
                 data && data.map((items, index) => {
                      return(
                        <CardStatistics
                          key={index}
                          {...items}/>
                      )
                  })
              }
        </div>
    )
}

export default CardsPallet
