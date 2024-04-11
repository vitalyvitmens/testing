//! Запросы к дереву. Префиксы действия: queryAllByTestId
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { queryAllByTestId } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    const element = queryAllByTestId('input', { exact: false })

    console.log(element.length)
    element.forEach((x) => console.log(prettyDOM(x)))
  })
})

// npm test -- InputQueryAllByTestId.spec.tsx --watch
