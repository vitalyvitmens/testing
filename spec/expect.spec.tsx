//! Обзор методов - метод: expect()
//! Assertions используется для сравнения фактичесих результатов тестов с ожидаемыми результатами
//! Matcher определяет логику для сравнения ожидаемых значений с фактическими значениями
import { AddButton } from '../src/components/AddButton'
import { render, screen } from '@testing-library/react'

describe('Кнопка "Добавить"', () => {
  it.todo('Блокировка для строки больше 32 символов')
  it.todo('Блокировка для строки меньше 1 символа')

  it('Проверка кликов по кнопке', () => {
    // expect('calculatedValue').toBe('expectedValue')
    
    const sum = (a: number, b: number) => a + b
    expect(sum(1, 2)).toBe(3)
  })
})

// npm run test -- expect.spec.tsx --watch
