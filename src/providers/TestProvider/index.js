import React from 'react'
import { Button } from '../../components'

export default function TestProvider(props) {
  
  return (
    <div>
      TestProvider
      <Button onClick={() => console.log('hi')} />    
    </div>
  )
}
