//! Обзор методов - метод: expect() и Symmetrical Matcher
//! Matcher определяет логику для сравнения ожидаемых значений с фактическими значениями, симметричный matcher сравнивает строго левую и правую части сравниваемых значений (сравнивая объекты сравнит не ссылки, а содержимое)
import { AddButton } from '../src/components/AddButton'
import { render, screen } from '@testing-library/react'

describe('Кнопка "Добавить"', () => {
  it.todo('Блокировка для строки больше 32 символов')
  it.todo('Блокировка для строки меньше 1 символа')

  it('Проверка кликов по кнопке', () => {
    expect({
      value: 'a',
      label: 'b',
    }).toEqual({
      value: 'a',
      label: 'b',
    })
  })
})

// npm run test -- expectSymmetricalMatcher.spec.tsx --watch
