import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Anime from './Anime'
import Details from './Details'
import { Footer } from './Footer'
import Navbar from './Navbar'
import WatchList from './WatchList'

function MainRoutes() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Anime/>} />
        <Route path="/watchlist" element={<WatchList/>} />
        <Route path="/details/:id" element={<Details/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default MainRoutes