//! Запросы к дереву. Префиксы действия: findByTestId
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', async () => {
    const fn = jest.fn()

    const { findByTestId } = render(<Input value="Greetings!" onChange={fn} />)

    const element = await findByTestId('input-field')

    console.log(prettyDOM(element))
  })
})

// npm test -- InputFindByTestId.spec.tsx --watch
