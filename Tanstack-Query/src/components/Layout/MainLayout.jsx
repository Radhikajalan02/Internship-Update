import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-main">
        <Outlet /> {/*so that my header and footer remains constant only the data between them changes*/}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout