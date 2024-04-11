//! Запросы к дереву Query-методы. Признаки: ByText
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getByText } = render(<Input value="Greetings!" onChange={fn} />)

    const element = getByText(
      (content: string, el: Element | null) => {
        // console.log(el?.tagName, content)

        if (content.includes('заголовок')) {
          return true
        }

        return false
      },
      {
        // selector: 'input',
        // exact: false,
        // collapseWhitespace: false,
        // trim: false,
        // ignore: false,
        // normalizer: (value: string) => {
        //   const newValue = value.toLocaleUpperCase()
        //   console.log(value, newValue)
        //   return newValue
        // },
        // suggest: true,
      }
    )
    console.log(prettyDOM(element))
  })
})

// npm test -- InputByText.spec.tsx --watch
