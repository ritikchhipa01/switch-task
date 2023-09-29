import React from 'react'
import Header from './Header'
import Body from './Body'

const MainContainer = () => {
  return (
    <div className=' w-[85vw] flex flex-col  items-center mx-auto'>
      <Header/>
      <Body/>
    </div>
  )
}

export default MainContainer
