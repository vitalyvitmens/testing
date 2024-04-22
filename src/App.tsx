import { useState } from 'react'
import { Input } from './components/Input'
import { AddButton } from './components/AddButton'
import { Notifier } from './components/Notifier'

export const App = () => {
  const [Inputvalue, setInputValue] = useState('')
  const [notifierOpen, setNotifierOpen] = useState(false)

  const handleAddButtonClick = () => {
    console.log('Button was clicked!')
  }

  const handleNotifierClose = () => {
    setNotifierOpen((prev) => !prev)
  }

  return (
    <>
      <Notifier
        task="Любая задача"
        open={notifierOpen}
        onClose={handleNotifierClose}
      />
      <Input value={Inputvalue} onChange={(val) => setInputValue(val)} />
      <AddButton onClick={handleAddButtonClick} />
      <button onClick={() => setNotifierOpen((prev) => !prev)}>
        Показать нотификацию
      </button>
    </>
  )
}
