import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { App } from '../src/App'

it('Проверка корневого компонента', () => {
  const view = render(<App />)

  expect(view.getByText(/React/)).toBeInTheDocument()
})
