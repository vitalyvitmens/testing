import uE from '@testing-library/user-event'
import { AddButton } from '../src/components/AddButton'
import { render, screen } from '@testing-library/react'

describe('Кнопка "Добавить"', () => {
  const userEvent = uE.setup()
  it.todo('Блокировка для строки больше 32 символов')
  it.todo('Блокировка для строки меньше 1 символа')

  it('Проверка кликов по кнопке', async () => {
    const fn = jest.fn()

    render(<AddButton onClick={fn} />)

    const button = screen.getByText(/добавить/i)

    await userEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1)

    // await userEvent.dblClick(button)
    // expect(fn).toHaveBeenCalledTimes(2)

    // await userEvent.tripleClick(button)
    // expect(fn).toHaveBeenCalledTimes(3)
  })
})

// npm run test -- AddButton.spec.tsx --watch
