import React from 'react'
import Tab from './Tab'

const TabSection = (props) => {
  return (
    <div className='tabs'>
        <Tab section={'All'} className={'active'}/>
        <Tab section={'Active'}/>
        <Tab section={'Completed'}/>
    </div>
  )
}

export default TabSection