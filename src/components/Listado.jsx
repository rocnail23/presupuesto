import React from 'react'
import Gastos from './Gastos'
import PropTypes from "prop-types"

console.log(PropTypes)

const Listado = ({gastos}) => {
  return (
    <div className='gastos-realizados'>
        <h2>gastos</h2>
        {gastos?.map(gasto => (
            <Gastos
            key={gasto.id} 
            gasto={gasto}/>
        ))}
        </div>
  )
}

Listado.propTypes = {
  gastos: PropTypes.array.isRequired
}

export default Listado