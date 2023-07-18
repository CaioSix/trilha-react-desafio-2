import React from 'react'
import './index.css'

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }


  return (
    <div className='ItemRepo' >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target='_blank' className='ver'>Ver respositorio</a> <br />
        <a href='#' rel="noreferrer" className='remover' onClick={handleRemove} >Remover</a>
        <hr />
        
    </div>
  )
}

export default ItemRepo