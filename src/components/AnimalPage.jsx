import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AnimalPage() {
  
    const [animal, setAnimal] = useState({})
    const params = useParams()

    console.log(params.id)

    async function fetchAnimal() {
        const response = await fetch(`http://localhost:3000/animals/${params.id}`)
        const data = await response.json()
        setAnimal(data)
    }

    useEffect(()=>{
        fetchAnimal()
    }, [])
  
    return (
<div>
    <img src= { animal.image }/>

    <h2>{ animal.name }</h2>
</div>

  )
}

export default AnimalPage