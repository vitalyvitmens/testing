//! Обзор методов - метод: expect() Asymmetrical Matcher
//! Matcher определяет логику для сравнения ожидаемых значений с фактическими значениями, асимметричный matcher сравнивает только часть сравниваемых значений
import { AddButton } from '../src/components/AddButton'
import { render, screen } from '@testing-library/react'

describe('Кнопка "Добавить"', () => {
  it.todo('Блокировка для строки больше 32 символов')
  it.todo('Блокировка для строки меньше 1 символа')

  it('Проверка кликов по кнопке', () => {
    expect({
      value: 'a',
      label: 2,
      name: '',
      isLoading: false,
    }).toEqual(
      expect.objectContaining({
        value: expect.any(String),
        label: expect.any(Number),
        name: expect.anything(), // тест упадет если придет null или undefined
      })
    )
  })
})

// npm run test -- expectAsymmetricalMatcher.spec.tsx --watch
