import React from 'react'

import './styles.css'

function Input({value, onChange}) {
  return (
    <>
        <input className='input botao' value={value} onChange={onChange}></input>

    </>
  )
}

export default Input