import React from 'react'

import './styles.css'
import { click } from '@testing-library/user-event/dist/click'

function Button({onClick}) {

  const alerta = () =>{
    alert('funciona')
  }


  return (
    <>
        <button className='botao' onClick={onClick}> 
          BUSCAR
        </button>

    </>
  )
}

export default Button