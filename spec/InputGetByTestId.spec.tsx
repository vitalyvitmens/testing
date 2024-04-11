//! Запросы к дереву. Префиксы действия: getByTestId
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getByTestId } = render(<Input value="Greetings!" onChange={fn} />)

    console.log(prettyDOM(getByTestId('input-field')))
  })
})

// npm test -- InputGetByTestId.spec.tsx --watch
