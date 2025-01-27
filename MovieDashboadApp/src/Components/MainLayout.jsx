import React from 'react'
import HeaderWidget from './HeaderWidget'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div className='layout'>
        <HeaderWidget />
        <Outlet/>
    </div>
  )
}

export default MainLayout