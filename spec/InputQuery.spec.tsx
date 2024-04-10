//! Запросы к дереву Query-методы. Признак queryByPlaceholderText
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { queryByPlaceholderText } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    const input = queryByPlaceholderText('заголовок', { exact: false })

    if (input) {
      console.log(prettyDOM(input))
    } else console.log('Элемент не найден!')
  })
})

// npm test -- InputQuery.spec.tsx --watch
