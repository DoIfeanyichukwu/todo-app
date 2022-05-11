import React from 'react'
import Tab from './Tab'

const TabSection = ({setTab}) => {
  return (
    <div className='tabs'>
      <Tab section={'All'} setTab={setTab}/>
      <Tab section={'Active'} className='active' setTab={setTab}/>
      <Tab section={'Completed'} setTab={setTab}/>
    </div>
  )
}

export default TabSection