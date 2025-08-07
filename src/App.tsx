import {  Routes, Route } from "react-router";
import MainPage from './pages/mainPage/MainPage'
import './App.css'
import AboutPage from "./pages/aboutPage/AboutPage";

export default function App() {
  

  return (
  
      <Routes>
        <Route path='/privacy' element={ <MainPage />} />
        <Route path = "/about" element = { <AboutPage/> }/>
      </Routes>
   
  )
}
