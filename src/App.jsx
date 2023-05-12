import { Fragment, useEffect, useState } from 'react'
import Presupuesto from './components/Presupuesto'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'



function App() {
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [showQuestion , setShowQuestion] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)
  
  console.log(gastos)

  useEffect(() => {

    if(crearGasto){
      setGastos([
        ...gastos,
        gasto
      ])
    }

    const montorestante = restante - gasto.cantidad
    setRestante(montorestante)
    setCrearGasto(false)
    
  },[gasto])

console.log(gastos)

  return (
    <Fragment>
      <div className='container'>
      <header>
      <h1>Presupuesto de la semana</h1>
      <div className='contenido-principal contenido'>
      {showQuestion 
      ?
      
      
        <Presupuesto
        setPresupuesto={setPresupuesto}
        setRestante={setRestante}
        setShowQuestion={setShowQuestion}/>
     
    
    : <div className='row'>
      <div className='one-half column'>
        <Formulario
        setGasto={setGasto}
        setCrearGasto={setCrearGasto}/>
      </div>
      <div className='one-half column'>
        <Listado
        gastos={gastos}/>
        <ControlPresupuesto 
        presupuesto={presupuesto}
        restante={restante} />
      </div>
    </div> }
    </div>
    </header>
      
      
      </div>
     
    </Fragment>
  )
}

export default App
