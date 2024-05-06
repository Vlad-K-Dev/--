import React, {useEffect} from "react";
import Graph from "./Components/Graph/Graph";
import Round from "./Components/Round/Round"
import styles from './Components/Graph.modules.scss'


const Progress = () => {
  return(
    <div className="progress">
      <Graph/>
      <Round/>
    </div>
  )
}


export default Progress