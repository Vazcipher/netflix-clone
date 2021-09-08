import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {action,originals,ComedyMovies,horrorMovies} from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPosts/RowPost'
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title={"Netflix Originals"}/>
      <RowPost url={action} title={"Action"} isSmall/>
      <RowPost url={ComedyMovies} title={"Comedy Movies"} isSmall/>
      <RowPost url={horrorMovies} title={"Horror Movies"} isSmall/>
    </div>
  )
}
