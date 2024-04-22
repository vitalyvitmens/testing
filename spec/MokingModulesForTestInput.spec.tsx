//! Мокирование модулей
import { render, screen } from '@testing-library/react'
import { InputForMokingModules } from '../src/components/InputForMokingModules'
import ue from '@testing-library/user-event'

jest.mock('../src/utils/helpers')

describe('Поле ввода', () => {
  const userEvent = ue.setup()

  it('Ограничение на ввод более 32 символов', async () => {
    render(
      <InputForMokingModules defaultValue="Hi!" onChange={() => undefined} />
    )

    const hintEl = screen.getByTestId('input-hint-text')
    const inputEl = screen.getByRole('textbox')
    await userEvent.clear(inputEl)

    await userEvent.type(inputEl, 'Пример правильного заголовка')
    expect(hintEl.innerHTML).not.toBe('')

    // await userEvent.type(inputEl, 'Пример заголовка задачи длиннее 32 символов')
    // expect(hintEl.innerHTML).toBe('')
  })
})

// npm run test -- MokingModulesForTestInput.spec.tsx --watch
