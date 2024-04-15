//! События и fireEvent - не стоит использовать так как не соответсвует пользовательскому опыту, вместо этого используй библиотеку "user-event"
import { render, screen, fireEvent, createEvent } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    render(<Input value="Greetings!" onChange={fn} />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(input, { bubbles: false })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    const newEvent = createEvent.click(input)
    fireEvent(input, newEvent)
  })
})

// npm test -- InputEventsAndFireEvent.spec.tsx --watch
