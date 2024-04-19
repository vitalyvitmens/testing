//! DOM-мэтчеры Testing Library:
//! 1. Установи @testing-library/jest-dom, если он еще не установлен:
//! npm install --save-dev @testing-library/jest-dom
//! в файл tsconfig.json добавь поле:  "types": ["@testing-library/jest-dom"],
import { render, screen } from '@testing-library/react'
import { InputForDOMMatchersTestingLibrary } from '../src/components/InputForDOMMatchersTestingLibrary'

describe('Поле ввода', () => {
  it.todo('Поле доступно для ввода')

  it('Ограничение на ввод более 32 символов', () => {
    const fn = jest.fn()
    const view = render(
      <InputForDOMMatchersTestingLibrary defaultValue="Hi!" onChange={fn} />
    ) // рендерит компонент

    screen.debug() // отображает DOM-дерево в консоли

    const containerEl = screen.getByTestId('input-container')
    const inputEl = screen.getByRole('textbox')
    const labelEl = screen.getByTestId('input-label')
    const hintEl = screen.getByTestId('input-hint-text')

    expect(inputEl).toBeInTheDocument() // проверяет наличие элемента в DOM

    expect(inputEl).toBeVisible() // проверяет видимость элемента в DOM

    // expect(inputEl).toBeDisabled() // проверяет не доступность элемента для ввода

    expect(inputEl).toBeEnabled() // проверяет доступность элемента для ввода

    inputEl.focus() // добавляет фокус на элементе
    expect(inputEl).toHaveFocus() // проверяет наличие фокуса на элементе в DOM

    // expect(labelEl).toBeEmptyDOMElement() //! проверяет наличие пустого DOM-элемента labelEl, но он не пустой поэтому тест провалится. Для инпута не имеет никакого смысла имеет смысл применять только на label

    expect(hintEl).toBeEmptyDOMElement() // проверяет наличие пустого DOM-элемента hintEl равного <span/>

    expect(inputEl).toHaveAttribute('title', 'поле для заголовка') // проверяет наличие атрибута title со значением "поле для заголовка" в DOM <input/>

    expect(inputEl).toHaveClass('input-field-element', 'input-field-node') // проверяет наличие CSS-классов "input-field-element" и "input-field-node" в DOM <input/>

    //   expect(inputEl).toHaveClass('input-field-element input-field-node', {
    //     exact: true,
    //   }) // проверяет наличие всех имеющихся CSS-классов "input-field-element" и "input-field-node" в DOM <input/>, в случае указания только одного из имеющихся классов получим ошибку теста, так как нужно указать все имеющиеся CSS-классы в одну строку

    expect(inputEl).toHaveStyle('color: red') // проверяет наличие CSS-свойства color со значением "red" в DOM <input/>

    expect(inputEl).toHaveStyle({
      color: 'red',
      display: 'flex',
    }) // проверяет наличие CSS-свойства display со значением "flex" в DOM <input/> и CSS-свойства color со значением "red" в DOM <input/>

    expect(inputEl).toHaveStyle(`
      color: red;
      display: flex;
    `) // проверяет наличие CSS-свойства display со значением "flex" в DOM <input/> и CSS-свойства color со значением "red" в DOM <input/>

    expect(containerEl).toContainElement(inputEl) // проверяет наличие DOM-элемента inputEl в DOM-контейнере containerEl

    // expect(hintEl).toContainElement(inputEl) // проверяет наличие DOM-элемента inputEl в DOM-контейнере hintEl, тест не пройдет так как hintEl не содержит DOM-элемента inputEl

    expect(inputEl).toHaveValue('Hi!') // проверяет наличие значения "Hi!" в DOM <input/>

    expect(inputEl).toHaveDisplayValue(/hi/i) // проверяет наличие значения "hi" в DOM <input/>. i - регистронезависимый поиск

    render(
      <select data-testid="selectId" defaultValue={2}>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
      </select>
    ) // рендерит компонент select

    const selectEl = screen.getByTestId('selectId') // получает DOM-элемент select

    expect(selectEl).toHaveValue('2') // проверяет наличие defaultValue "2" в DOM <select/>
    expect(selectEl).toHaveDisplayValue('Option 2') // проверяет наличие значения "Option 2" в DOM <select/>
  })
})

// npm run test -- AssertionsDOMMatchersTestingLibrary.spec.tsx --watch
