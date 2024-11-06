import { useState, useEffect } from 'react'
import AnimalsContainer from "./AnimalsContainer"
import NewAnimalForm from "./NewAnimalForm"
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"

function App() {

  return (
    <div className="App">

      <Navbar/>

      <Outlet />

      <footer> I am the footer </footer>

      {/* <NewAnimalForm animals={animals} setAnimals={setAnimals} />

      <AnimalsContainer animals={animals} setAnimals={setAnimals} /> */}

    </div>
  )
}

export default App