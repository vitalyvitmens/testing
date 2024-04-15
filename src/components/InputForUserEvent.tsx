import { ChangeEvent, useState } from 'react'
import './style.css'

type Props = {
  defaultValue: string
  onChange: (value: string) => void
}
export const InputForUserEvent = ({ defaultValue, onChange }: Props) => {
  const [labelValue, setLabelValue] = useState('')
  const [inputValue, setInputValue] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value

    if (val.length > 32) {
      setLabelValue(`Превышена максимальная длина заголовка ${val.length}`)
    } else {
      setLabelValue('')
      setInputValue(val)
      onChange(val)
    }
  }

  return (
    <div className="input-field">
      <label htmlFor="input-header-field-id" data-testid="input-label">
        Введите заголовок
      </label>
      <input
        id="input-header-field-id"
        // aria-hidden={true}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={`например, введите "купить молоко"`}
        alt="поле для ввода заголовка задачи"
        title="поле для заголовка"
        data-testid="input-field"
      />
      <span data-testid="input-hint-text">{labelValue}</span>
    </div>
  )
}
