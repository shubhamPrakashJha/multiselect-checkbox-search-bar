import React from 'react'
import DropdownSelector from '../components/DropdownSelector';
import {colors,components} from '../mock'

import styles from './home.module.css'



function Home() {
  const onSubmit = (list) => {
    console.log(list)
  }
  return (
    <div className={styles.home}>
      <DropdownSelector list={components} onSubmit={onSubmit}/>
    </div>
  )
}

export default Home
