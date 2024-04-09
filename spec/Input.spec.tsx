import { render, screen, prettyDOM } from '@testing-library/react'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const view = render(<h1>Greetings!</h1>)
    console.log(prettyDOM(view.baseElement))

    screen.debug()
  })
})

// npm test -- Input.spec.tsx --watch
