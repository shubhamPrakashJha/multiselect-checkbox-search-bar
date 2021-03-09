import React from 'react'
import DropdownSelector from '../components/DropdownSelector';
import {colors} from '../mock'



function Home() {
  const onSubmit = (list) => {
    console.log(list)
  }
  return (
    <div style={{width: '300px'}}>
      <DropdownSelector list={colors} onSubmit={onSubmit}/>
    </div>
  )
}

export default Home
