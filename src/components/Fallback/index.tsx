import React from 'react'
import { IFallback } from './types'

function FallbackUI({onClick} : IFallback ) {
  return (
    <div>
      
      <h1>  Plase Try again  </h1>
      <button onClick={onClick} >Retry</button>

    </div>
  )
}

export default FallbackUI