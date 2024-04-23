//! Мокирование таймеров. Рекурсивный вызов timeout-функции
it('Мокируем таймеры', async () => {
  const fn = jest.fn(console.log)
  let counter = 0

  const runTimer = () => {
    setTimeout(() => {
      fn('Таймер выполнился!')
      runTimer()
      counter++
    }, 3000)
  }

  //! Вариант №1: методы jest.runAllTimers() и jest.runOnlyPendingTimers()
  runTimer() // запускаем рекурсивный таймер №1
  runTimer() // запускаем рекурсивный таймер №2
  runTimer() // запускаем рекурсивный таймер №3
  jest.runOnlyPendingTimers() // используй этот метод, так как он выполнит 1 таймер и остановится
  // jest.runAllTimers() //! если есть слайдер и его нужно анимировать каждые 2 секунды перелистывать слайд на следующий, для этого используют рекурсивные timeout, но если запустить тест такого компонета с помощью runAllTimers(), то мы получим переполнение стека вызовов, утечку памяти и никогда не заканчивающийся тест, поэтому не используй jest.runAllTimers()!!!
  // jest.clearAllTimers() // очищаем все таймеры
  console.log(jest.getTimerCount()) // получаем общее количество таймеров на данный момент, выдаст 3, так как мы запустили 3 рекурсивные таймера, а если раскомментировать строку // jest.clearAllTimers(), то мы очисти все 3 таймера и получим 0

  expect(fn).toHaveBeenCalledTimes(3) // ожидаем, что мок-функция fn будет вызвана 3 раза
  // expect(jest.getTimerCount()).toBe(3) //! ожидаем, что общее количество таймеров будет равно 3, так не использовать может приводить к утечкам памяти!!! Но данный тест используется именно для проверки не утекает ли память, это может быть очень полезно для проверки быстродействия приложения.

  expect(fn).toHaveBeenCalled()
})

//! Вариант №2: методы jest.runOnlyPendingTimers() и jest.setSystemTime(3000), jest.getRealSystemTime()
//   runTimer()
//   jest.runOnlyPendingTimers()

//   // jest.setSystemTime(3000) // устанавливаем системное время в миллисекундах
//   // jest.getRealSystemTime() // получаем реальное время (не фейковое) в миллисекундах

//   expect(fn).toHaveBeenCalled()
// })

//  npm run test -- MockTimersTimeoutFn.spec.tsx --watch
