import React, { Fragment } from 'react'
import {Color} from "../helper"
import Proptypes from "prop-types"
const ControlPresupuesto = ({presupuesto, restante}) => {
  return (
    <Fragment>
        <div className='alert alert-primary'>
    Presupuesto: {presupuesto}
        </div>
        <div className={Color(presupuesto,restante)}>
    Restante: {restante}
        </div>
    </Fragment>
  )
}

ControlPresupuesto.proptypes = {
    presupuesto: Proptypes.number.isRequired,
    restante: Proptypes.number.isRequired
}

export default ControlPresupuesto