//! Запросы к дереву. Пользовательский запрос CustomQuery
import { render, prettyDOM } from '@testing-library/react'
import { InputDataTest } from '../src/components/InputDataTest'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { container } = render(
      <InputDataTest value="Greetings!" onChange={fn} />
    )

    // const element = container.querySelector('[data-test="input-field"]')
    const element = container.querySelector('[for="input-header-field-id"]')

    console.log(prettyDOM(element || undefined))
  })
})

// npm test -- InputCustomQuery.spec.tsx --watch
