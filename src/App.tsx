import { useState } from 'react'
import { Input } from './components/Input'

export const App = () => {
  const [Inputvalue, setInputValue] = useState('')

  return <Input value={Inputvalue} onChange={(val) => setInputValue(val)} />
}
