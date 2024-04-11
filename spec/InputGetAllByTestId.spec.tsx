//! Запросы к дереву. Префиксы действия: getAllByTestId
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getAllByTestId } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    const element = getAllByTestId(/input/i)

    element.forEach((x) => console.log(prettyDOM(x)))
  })
})

// npm test -- InputGetAllByTestId.spec.tsx --watch
