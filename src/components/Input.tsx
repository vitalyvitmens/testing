import { ChangeEvent, useState } from 'react'
import './style.css'

type Props = {
  value: string
  onChange: (value: string) => void
}
export const Input = ({ value, onChange }: Props) => {
  const [labelValue, setLabelValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value

    if (val.length > 32) {
      setLabelValue(`Превышена максимальная длина заголовка ${val.length}`)
    } else {
      setLabelValue('')
      onChange(val)
    }
  }

  return (
    <div className="input-field">
      <label htmlFor="input-header-field-id">Введите заголовок</label>
      <input
        id="input-header-field-id"
        // aria-hidden={true}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={`например, введите "купить молоко"`}
        alt="поле для ввода заголовка задачи"
        title="поле для заголовка"
      />
      <span data-testid="hint-text">{labelValue}</span>
    </div>
  )
}
