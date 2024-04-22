import { ChangeEvent, useState } from 'react'
import './style.css'
import { HEADER_LENGTH_ERROR_MESSAGE, validateHeader } from '../utils/helpers'

type Props = {
  defaultValue: string
  onChange: (value: string) => void
}
export const InputForMokingModules = ({ defaultValue, onChange }: Props) => {
  const [labelValue, setLabelValue] = useState('')
  const [inputValue, setInputValue] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value

    if (validateHeader(val)) {
      setLabelValue('')
      setInputValue(val)
      onChange(val)
    } else {
      setLabelValue(HEADER_LENGTH_ERROR_MESSAGE)
    }
  }

  return (
    <div className="input-field" data-testid="input-container">
      <label htmlFor="input-header-field-id" data-testid="input-label">
        Заголовок задачи
      </label>
      <input
        id="input-header-field-id"
        type="text"
        className="input-field-element input-field-node"
        value={inputValue}
        onChange={handleChange}
        placeholder={`например, введите "купить молоко"`}
        alt="поле для ввода заголовка задачи"
        title="поле для заголовка"
        data-testid="input-field"
        style={{ display: 'flex' }}
      />
      <span data-testid="input-hint-text">{labelValue}</span>
    </div>
  )
}
