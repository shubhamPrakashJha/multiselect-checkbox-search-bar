import React from 'react'
import DropdownSelector from '../components/DropdownSelector';
import {colors,components} from '../mock'



function Home() {
  const onSubmit = (list) => {
    console.log(list)
  }
  return (
    <div style={{width: '300px'}}>
      <DropdownSelector list={components} onSubmit={onSubmit}/>
    </div>
  )
}

export default Home
