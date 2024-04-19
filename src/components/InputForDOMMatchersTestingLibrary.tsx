import { ChangeEvent, useState } from 'react'
import './style.css'

type Props = {
  defaultValue: string
  onChange: (value: string) => void
}
export const InputForDOMMatchersTestingLibrary = ({
  defaultValue,
  onChange,
}: Props) => {
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
    <div className="input-field" data-testid="input-container">
      <label htmlFor="input-header-field-id" data-testid="input-label">
        Введите заголовок
      </label>
      <input
        className="input-field-element input-field-node"
        id="input-header-field-id"
        // aria-hidden={true}
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={`например, введите "купить молоко"`}
        alt="поле для ввода заголовка задачи"
        title="поле для заголовка"
        data-testid="input-field"
        // style={{ display: 'none' }}
        // hidden={true}
        // disabled={true}
        style={{ color: 'red', display: 'flex' }}
      />
      <span data-testid="input-hint-text">{labelValue}</span>
    </div>
  )
}
