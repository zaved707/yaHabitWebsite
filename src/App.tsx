import { useState } from 'react'
import {  Routes, Route } from "react-router";
import MainPage from './pages/mainPage/MainPage'
import './App.css'

export default function App() {
  

  return (
  
      <Routes>
        <Route path='/' element={ <MainPage />} />
      </Routes>
   
  )
}
