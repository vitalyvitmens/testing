//! Обзор методов библиотеки "user-event" - методы: cut() copy() paste()
//! Для работы с библиотекой "user-event" установи ее и импортируй в свой файл: npm install --save-dev @testing-library/user-event
import { render, screen } from '@testing-library/react'
import { InputForUserEvent } from '../src/components/InputForUserEvent'

import uE from '@testing-library/user-event'

describe('Поле ввода', () => {
  const userEvent = uE.setup({ delay: 100 })

  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', async () => {
    const fn = jest.fn()

    render(<InputForUserEvent defaultValue="" onChange={fn} />)

    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'Hello!') // добавляет строку посимвольно в input
    await userEvent.tripleClick(input) // выделяет содержимое инпута
    const cuttedValue = await userEvent.cut() // удаляет содержимое поле
    console.log('cuttedValue: ', cuttedValue)

    // await userEvent.copy() // копирует содержимое поле
    // await userEvent.click(input) 
    // screen.debug()

    await userEvent.clear(input) // очищает поле

    await userEvent.paste(cuttedValue) // вставляет содержимое из буфера без указания инпута

    expect(screen.getByDisplayValue(/hello/i)).toBeInTheDocument() // проверяет что это значение отображается
  })
})

// npm test -- InputUserEventSetupCutCopyPaste.spec.tsx --watch
