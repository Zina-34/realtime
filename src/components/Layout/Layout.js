import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Head from '../Header/Head'

const Layout = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
