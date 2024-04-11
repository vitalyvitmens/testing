//! Запросы к дереву Query-методы. Признаки: ByTestId
//! Очень простой но крайне не желательный метод поиска так как не отражает пользовательский опыт и создает data-testid="hint-text" в src\components\Input.tsx который нужно не забыть удалить на этапе продакшна
import { render, prettyDOM } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')

  it('Поле доступно для ввода', () => {
    const fn = jest.fn()

    const { getByTestId } = render(<Input value="Greetings!" onChange={fn} />)

    console.log(prettyDOM(getByTestId('hint-text')))
  })
})

// npm test -- InputByTestId.spec.tsx --watch
