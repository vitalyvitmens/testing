//! Обзор методов библиотеки "user-event" - метод: keyboard()
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

    await userEvent.click(input)
    // await userEvent.keyboard('Hello!')
    // await userEvent.keyboard('{Shift>}H{/Shift}ello!')
    // await userEvent.keyboard('[ShiftLeft>]H[/ShiftLeft]ello!')
    await userEvent.keyboard('{H>5}') // добавляет 5 символов H
    //! https://www.toptal.com/developers/keycode
    //! Сайт для определения key, code, discription нажатой клавиши на клавиатуре

    expect(fn).toHaveBeenCalledWith('Hello!')
  })
})

// npm test -- InputUserEventSetupKeyboard.spec.tsx --watch
