import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from "prop-types"
const Formulario = ({setGasto, setCrearGasto}) => {

  const [nombre, setnombre] = useState("")
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  

  const handleSubmit = (e) => {
    e.preventDefault()

    if(cantidad < 1 || isNaN(cantidad)|| nombre == ""){
      setError(true)
      return
    }
    setError(false)

    const gasto = {
      nombre,
      cantidad,
      id : shortid()
    }
    setCrearGasto(true)
    setGasto(gasto)
    
    setnombre("")
    setCantidad(0)
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <h2>colocar gasto</h2>
        {error ? <Error mensaje="todos los campos son obligatorios"/> : null} 
        <div className='campo'>
        <label>nombre de gasto</label>
        <input type="text"
        placeholder='gasto'
        className='u-full-width'
        value={nombre}
        onChange={(e) => setnombre(e.target.value)} />
        </div>

        <div className='campo'>
        <label>cantidad gasto</label>
        <input type="number"
        placeholder='cantidad'
        className='u-full-width'
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value))} />
        </div>

        <input type="submit"
        className='u-full-width button-primary'
        placeholder='enviar presupuesto' />
        
        
        
    </form>
  )
}


Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario