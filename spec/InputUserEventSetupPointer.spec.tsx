//! Обзор методов библиотеки "user-event" - метод: pointre()
//! Для работы с библиотекой "user-event" установи ее и импортируй в свой файл: npm install --save-dev @testing-library/user-event
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

    // await userEvent.pointer({ keys: '[MouseLeft]', target: button })
    // expect(fn).toHaveBeenCalledTimes(1)

    await userEvent.pointer({ keys: '[MouseLeft][MouseLeft]', target: button })
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

// npm test -- InputUserEventSetupPointer.spec.tsx --watch
