import React from 'react'
import DropdownSelector from '../components/DropdownSelector';
import {colors,components} from '../mock'

import styles from './home.module.css'



function Home() {
  const onSubmit = (list) => {
    /***
     * TODO: Some action with the selected data
     * input: selected data retured from DropdownSelector after clicking submit button
     */
    console.log(list)
  }
  return (
    <div className={styles.home}>
      <DropdownSelector list={colors} name={"Colors"} onSubmit={onSubmit}/>
      <DropdownSelector list={components} name={"Components"} onSubmit={onSubmit}/>
    </div>
  )
}

export default Home
