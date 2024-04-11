//! Запросы к дереву. Префиксы действия: findAllByTestId
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', async () => {
    const fn = jest.fn()

    const { findAllByTestId } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    const element = await findAllByTestId(/input/i)
    // const element = await findAllByTestId('input-field')
    console.log(element.length)
    element.forEach((x) => console.log(prettyDOM(x)))
  })
})

// npm test -- InputFindAllByTestId.spec.tsx --watch
