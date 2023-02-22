import React from 'react'

const Hello = ({color,i}) => {
  return (
    <div className='hello' style={{backgroundColor:color}}>{i+1}</div>
  )
}

export default Hello