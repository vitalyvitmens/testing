import { render, screen, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()
    const span = document.createElement('span')

    // const { container } = render(<Input value="Greetings!" onChange={fn} />, {
    //   container: document.body.appendChild(span),
    // })
    // console.log(prettyDOM(container))

    // const { baseElement } = render(<Input value="Greetings!" onChange={fn} />, {
    //   container: document.body.appendChild(span),
    // })
    // console.log(prettyDOM(baseElement))

    // const { rerender } = render(<Input value="Greetings!" onChange={fn} />)
    // screen.debug()
    // rerender(<Input value="Привет!" onChange={fn} />)
    // screen.debug()

    // const { unmount } = render(<Input value="Greetings!" onChange={fn} />)
    // screen.debug()
    // unmount()
    // screen.debug()

    const { asFragment } = render(<Input value="Greetings!" onChange={fn} />)
    const firstRender = asFragment()
    expect(firstRender).toMatchSnapshot()

    // const { getByRole } = render(<Input value="Greetings!" onChange={fn} />)
    // getByRole('text')

    const {} = render(<Input value="Greetings!" onChange={fn} />, {
      container: document.body.appendChild(span),
      hydrate: false,
      legacyRoot: false,
    })
    // screen.debug()
  })
})

// npm test -- Input.spec.tsx --watch
