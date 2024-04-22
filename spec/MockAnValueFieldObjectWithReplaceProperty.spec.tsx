//! Мокирование значения поля объекта с replaceProperty()
import { render, screen } from '@testing-library/react'
import { InputForMokingModules } from '../src/components/InputForMokingModules'
import ue from '@testing-library/user-event'
import { headerFieldOptions } from '../src/utils/helpers'

//! Сейчас макирование работает на уровне всего тестового приложения, так как в файле jest.setup.js прописано то что закомментировано ниже, если ты не хочешь этого то расскоментируй строки ниже и закомментируй их в файле jest.setup.js

describe('Поле ввода', () => {
  const userEvent = ue.setup()

  it('Ограничение на ввод более 32 символов', async () => {
    render(
      <InputForMokingModules defaultValue="Hi!" onChange={() => undefined} />
    )

    jest.replaceProperty(
      headerFieldOptions,
      'message',
      'Всё в порядке, печатайте дальше!'
    )
    const hintEl = screen.getByTestId('input-hint-text')
    const inputEl = screen.getByRole('textbox')
    await userEvent.clear(inputEl)
    await userEvent.type(
      inputEl,
      'Пример правильного заголовка с неправильной длиной'
    )

    expect(hintEl.innerHTML).toBe('')
  })
})

// npm run test -- MockAnValueFieldObjectWithReplaceProperty.spec.tsx --watch
