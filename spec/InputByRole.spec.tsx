//! Запросы к дереву Query-методы. Признак ByRole
import { render, prettyDOM, logRoles } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getByRole, baseElement } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    const input = getByRole('textbox')
    // const input = getByRole('textbox', { hidden: true })

    console.log(prettyDOM(input))

    // logRoles(baseElement)
  })
})

// npm test -- InputByRole.spec.tsx --watch
