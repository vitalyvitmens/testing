//! Обзор методов - метод: expect().
//! Пишем свой Custom Asymmetrical Matcher expectCustomAsymmetricalMatcherForInput.spec.tsx
//! Создаем папку spec\custom-matchers если не существует
//! Создаем Custom Asymmetrical Matcher spec\custom-matchers\toHaveDoneItem.tsx
//! Переходим в файл jest.setup.js и добавляем метод toHaveDoneItem и импортируем его
//! типизируем функцию toHaveDoneItem в файле jest.d.ts
//! вносим изменения "include": ["src", "spec", "jest.d.ts"], в файл tsconfig.json если не вносили ещё
import { render, screen } from '@testing-library/react'
import { Input } from '../src/components/Input'

describe('Поле ввода', () => {
  it.todo('Ограничение на ввод более 32 символов')
  it.todo('Поле доступно для ввода')

  it('Есть выполненый пример', () => {
    expect([
      {
        label: 'Купить молоко',
        done: false,
      },
      {
        label: 'Выгулять Ричи',
        done: true,
      },
    ]).toContainEqual(expect.toHaveDoneItem())
  })
})

// npm run test -- expectCustomAsymmetricalMatcherForInput.spec.tsx --watch
