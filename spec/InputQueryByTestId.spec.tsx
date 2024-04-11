//! Запросы к дереву. Префиксы действия: queryByTestId
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { queryByTestId } = render(<Input value="Greetings!" onChange={fn} />)

    const element = queryByTestId('input-field')

    if (element === null) {
      console.log('Element is null')
    } else {
      console.log(prettyDOM(element))
    }
  })
})

// npm test -- InputQueryByTestId.spec.tsx --watch
