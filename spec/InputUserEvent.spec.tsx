//! Использование библиотеки "user-event" - симулирует работу пользователя с DOM в полном объёме, как бы это было в реальности
//! Для работы с библиотекой "user-event" установи ее и импортируй в свой файл: npm install --save-dev @testing-library/user-event
import { render, screen } from '@testing-library/react'
import { InputForUserEvent } from '../src/components/InputForUserEvent'
import userEvent from '@testing-library/user-event'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', async () => {
    const fn = jest.fn((val) => {
      console.log(val)
    })

    render(<InputForUserEvent defaultValue="" onChange={fn} />)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'Привет!')

    expect(fn).toHaveBeenCalledWith('Привет!')
  })
})

// npm test -- InputUserEvent.spec.tsx --watch
