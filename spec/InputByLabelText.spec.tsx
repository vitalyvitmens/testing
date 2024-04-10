//! Запросы к дереву Query-методы. Признак ByLabelText.spec.tsx
import { render, prettyDOM, getDefaultNormalizer } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getByLabelText } = render(
      <Input value="Greetings!" onChange={fn} />
    )

    const input = getByLabelText('Заголовок', {
      exact: false,
      // selector: 'input',
      normalizer: (value: string) =>
        getDefaultNormalizer({ trim: false, collapseWhitespace: false })(value),
      // normalizer: (value: string) => {
      //   const newValue = value.toLocaleUpperCase()
      //   console.log(value, newValue)
      //   return newValue
      // },
    })

    console.log(prettyDOM(input))
  })
})

// npm test -- InputByLabelText.spec.tsx --watch
