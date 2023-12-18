import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
        <Header />
        <Outlet /> 
        {/* now the top and bottom thing will be fixed, but outlet portion is dynamic */}
        <Footer />
    </>
  )
}

export default Layout