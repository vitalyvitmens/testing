import { useState } from 'react'
import { Input } from './components/Input'
import { AddButton } from './components/AddButton'

export const App = () => {
  const [Inputvalue, setInputValue] = useState('')
  const handleAddButtonClick = () => {
    console.log('Button was clicked!')
  }

  return (
    <>
      <Input value={Inputvalue} onChange={(val) => setInputValue(val)} />
      <AddButton onClick={handleAddButtonClick} />
    </>
  )
}
