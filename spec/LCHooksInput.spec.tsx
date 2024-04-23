//! Хуки жизненного цикла теста:
//! 1). beforeAll - выполняется перед всеми тестами
//! 2). afterAll - выполняется после всех тестов
//! 3). beforeEach - выполняется перед каждым тестом
//! 4). afterEach - выполняется после каждого теста
//! Их используют вне describe и вне теста, внутри теста нельзя использовать, а вот внутри describe можно
import { render, screen } from '@testing-library/react'
import { InputForMokingModules } from '../src/components/InputForMokingModules'
import ue from '@testing-library/user-event'

describe('Поле ввода', () => {
  const userEvent = ue.setup({
    advanceTimers: jest.advanceTimersByTime,
  })

  beforeEach(() => {
    jest.clearAllMocks() // очищает все моки
  })

  it('Поле доступно для ввода', async () => {
    const fn = jest.fn()
    render(<InputForMokingModules defaultValue="Hi!" onChange={fn} />)

    const inputEl = screen.getByRole('textbox')
    await userEvent.clear(inputEl)
    await userEvent.type(inputEl, 'Пример заголовка задачи')

    expect(inputEl).not.toHaveValue('Пример заголовка задачи')
  })

  it('Ограничение на ввод более 32 символов', async () => {
    const fn = jest.fn()
    render(<InputForMokingModules defaultValue="Hi!" onChange={fn} />)

    const hintEl = screen.getByTestId('input-hint-text')
    const inputEl = screen.getByRole('textbox')
    await userEvent.clear(inputEl)
    await userEvent.type(inputEl, 'Пример заголовка')
    expect(hintEl.innerHTML).not.toBe('')
  })
})

// npm test -- LCHooksInput.spec.tsx --watch
