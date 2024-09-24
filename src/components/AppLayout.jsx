import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default AppLayout