//! Мокирование таймеров. useFakeTimers() API
import { render } from '@testing-library/react'
import { Notifier } from '../src/components/Notifier'

// jest.useFakeTimers() // говорим jest использовать фейковые таймеры, эту строку я перенес в файл jest.setup.js

//! вариант №1 как нам не следить за callback который мы передаем в onClose, а просто проверить запуск метода setTimeout
// describe('Окно оповещения', () => {
//   it.todo('При выполнении задачи должно появляться оповещение')
//   it.todo('На экране одновременно может быть только одно оповещение')

//   it('Автоматически исчезать с экрана через 2 секунды', async () => {
//     const fn = jest.fn()

//     const spiedTimeout = jest.spyOn(global, 'setTimeout') // не дожидаясь callback проверяем что был вызван сам метод setTimeout

//     render(<Notifier task="Любая задача" open={true} onClose={fn} />)

//     expect(spiedTimeout).toHaveBeenCalled()
//   })

//! вариант №2 как проверять работу функции используя метод jest.runAllTimers()
// describe('Окно оповещения', () => {
//   it.todo('При выполнении задачи должно появляться оповещение')
//   it.todo('На экране одновременно может быть только одно оповещение')

//   it('Автоматически исчезать с экрана через 2 секунды', async () => {
//     const fn = jest.fn()

//     render(<Notifier task="Любая задача" open={true} onClose={fn} />)

//     jest.runAllTimers()
//     // jest.useRealTimers() //! если по какой то причине нам нужно использовать не фейковые таймеры, а реальные, то нужно использовать эту строку

//     expect(fn).toHaveBeenCalled()
//   })
// })

//! вариант №3 как проверять работу функции используя метод jest.advanceTimersByTime(delay), где delay - это время в миллисекундах
describe('Окно оповещения', () => {
  it.todo('При выполнении задачи должно появляться оповещение')
  it.todo('На экране одновременно может быть только одно оповещение')

  it('Автоматически исчезать с экрана через 2 секунды', async () => {
    const fn = jest.fn()

    render(<Notifier task="Любая задача" open={true} onClose={fn} />)

    jest.advanceTimersByTime(5000) // позволяет сдвигать временное окно таймера например на 5 секунд

    expect(fn).toHaveBeenCalled()
  })
})

// npm run test -- Notifier.spec.tsx --watch
