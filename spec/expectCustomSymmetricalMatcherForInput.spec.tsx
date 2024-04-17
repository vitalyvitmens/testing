//! Обзор методов - метод: expect().
//! Пишем свой Custom Symmetrical Matcher expectCustomSymmetricalMatcherForInput.spec.tsx
//! Создаем папку spec\custom-matchers
//! Создаем Custom Symmetrical Matcher spec\custom-matchers\toBeShorterThan.tsx
//! Переходим в файл jest.setup.js и добавляем метод toBeShorterThan и импортируем его
//! типизируем функцию toBeShorterThan в файле jest.d.ts
//! вносим изменения "include": ["src", "spec", "jest.d.ts"], в файл tsconfig.json
import { render, screen } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')
  it.todo('Поле доступно для ввода')

  it('Ограничение на ввод более 32 символов', () => {
    expect('Greetings!').toBeShorterThan(32)
  })
})

// npm run test -- expectCustomSymmetricalMatcherForInput.spec.tsx --watch
