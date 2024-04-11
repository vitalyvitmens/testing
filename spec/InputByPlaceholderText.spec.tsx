//! Запросы к дереву Query-методы. Поисковые признаки: ByPlaceholderText, ByAltText, ByTitle
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getByPlaceholderText, getByAltText, getByTitle } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    console.log(
      prettyDOM(getByPlaceholderText('купить молоко', { exact: false })),
      prettyDOM(getByAltText(/поле для ввода/)),
      prettyDOM(
        getByTitle((content: string) => {
          if (content === 'поле для заголовка') {
            return true
          }
          return false
        })
      )
    )
  })
})

// npm test -- InputByPlaceholderText.spec.tsx --watch
