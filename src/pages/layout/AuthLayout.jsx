import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const AuthLayout = () => {
  return (
      <>
          <Header />
          <main className='min-h-[100vh]'>
              <Outlet/>
          </main>
      </>
  )
}

export default AuthLayout;