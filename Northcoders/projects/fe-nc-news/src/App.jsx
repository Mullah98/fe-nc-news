// import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Articles from '../components/Articles'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from '../components/SingleArticle'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/articles/:article_id" element={<SingleArticle />}/>
      </Routes>
    </>
  )
}

export default App
