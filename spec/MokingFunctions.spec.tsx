//! Мокирование функций с jest.fn(). Внутреннее устройство

it('Мокируем функции', () => {
  // const fn = jest.fn() // () => void Cоздаем новую функцию mock, которая ничего не возвращает
  // const context = {}
  // fn(1, 2)
  // fn.apply(context, [1, 2])
  // console.log(fn.mock)

  // const fn = jest.fn(() => {
  //   throw 'Error' // без стэк трэйса
  //   // throw Error('Error') // со стэк трейсом
  // })
  // expect(() => fn()).toThrow()
  // console.log(fn.mock)

  // const fn = jest.fn()
  // fn(1, 2)
  // fn(3, 4)
  // console.log(fn.mock)

  // const fn = jest.fn()
  // const fnInst = new fn()
  // console.log(fn.mock)
  // console.log(fnInst)

  // const fn = jest.fn()
  // fn(1, 2)
  // const pointer1 = fn.mock
  // fn.mockClear() // очищает поля и заменяет объект их содержащий
  // const poiner2 = fn.mock
  // console.log(fn.mock)
  // console.log(pointer1 === poiner2)

  // const fn = jest.fn((arg1, arg2) => arg1 + arg2)
  // fn(1, 2)
  // console.log(fn.mock)
  // fn.mockReset() // очищает поля и заменяет объект их содержащий, но еще удаляет все results и все имплементации: (arg1, arg2) => arg1 + arg2
  // console.log(fn.mock)
  // console.log(fn(1, 2))

  const fn = jest.fn().mockReturnValue(42)
  console.log(fn(1, 2)) // выводим мокированный result = 42
  fn.mockReset() // очищает поля и заменяет объект их содержащий, но еще удаляет все results и все имплементации
  console.log(fn(1, 2)) // после fn.mockReset() получаем undefined
})

//  npm run test -- MokingFunctions.spec.tsx --watch
