//! Запросы к дереву используя расширение Testing Playground
import { render, screen, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    render(<Input value="Greetings!" onChange={fn} />)
                        //! сюда подставь сгенерированный тест из плагина Testing Playground
    const inputByRole = screen.getByRole('textbox', {
      name: /введите заголовок/i,
    })
                           //! сюда подставь сгенерированный тест из плагина Testing Playground
    const inputByAltText = screen.getByAltText(
      /поле для ввода заголовка задачи/i
    )

    console.log(prettyDOM(inputByRole))
    console.log(prettyDOM(inputByAltText))
  })
})

// npm test -- Test.spec.tsx --watch
