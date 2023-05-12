import React, { Fragment, useState } from 'react'
import Error from './Error'
import PropTypes from "prop-types"
const Presupuesto = ({setPresupuesto, setRestante, setShowQuestion}) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, seterror] = useState(false)

    const handleChange = (e) => {
        setCantidad(parseInt(e.target.value))
    }

   

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(cantidad <= 0 || isNaN(cantidad)){
            seterror(true)
            return

        }

        seterror(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setShowQuestion(false)

    }
    
  return (
    <Fragment>
        <h2>Coloca tu presupuesto</h2>
        {error ? <Error mensaje="error en el presupuesto" /> : null}
        <form onSubmit={handleSubmit}>
            <input 
            type="number"
            placeholder='presupuesto'
            className='u-full-width'
            onChange={handleChange} />

            <input type="submit"
            className='button-primary u-full-width'
            value="enviar presupuesto" />
        </form>
    </Fragment>
  )
}

Presupuesto.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante:  PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired,
}


export default Presupuesto