//! Обзор методов библиотеки "user-event" - метод setup()
//! Для работы с библиотекой "user-event" установи ее и импортируй в свой файл: npm install --save-dev @testing-library/user-event
import { render, screen } from '@testing-library/react'
import { InputForUserEvent } from '../src/components/InputForUserEvent'
import uE from '@testing-library/user-event'

describe('Поле ввода', () => {
  const userEvent = uE.setup({ delay: 100 })

  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', async () => {
    const fn = jest.fn((val) => {
      console.log(val)
    })

    render(<InputForUserEvent defaultValue="" onChange={fn} />)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'Привет!') // добавляет строку посимвольно в input
    await userEvent.clear(input) // очищает поле

    expect(fn).toHaveBeenCalledWith('Привет!')
  })
})

// npm test -- InputUserEventSetup.spec.tsx --watch
