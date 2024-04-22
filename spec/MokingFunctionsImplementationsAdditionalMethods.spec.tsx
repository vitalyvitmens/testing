//! Мокирование функций с jest.fn(). Имплементации и дополнительные методы.
//! mockImplementationOnce() - метод который выполнит нашу имплементацию всего 1 раз
//! mockReturnValue() - метод вернет значение в конце методов mockReturnValueOnce
//! mockResolvedValue() - метод для работы с Promise

it('Мокируем функции', async () => {
  // const fn = jest
  //   .fn() // можем ченить наши методы и имплементации:
  //   .mockImplementationOnce(() => 42)
  //   .mockImplementationOnce(() => 43)
  //   .mockImplementationOnce(() => true)
  // console.log(fn()) // первый вызов fn() с методом mockImplementationOnce() вернет 42
  // console.log(fn()) // второй вызов fn() с методом mockImplementationOnce() вернет 43
  // console.log(fn()) // третий вызов fn() с методом mockImplementationOnce() вернет true
  // console.log(fn()) // четвертый вызов fn() с методом mockImplementationOnce() вернет undefined, это значит что наши имплементации могут быть выполнены только 1 раз и далее удаляются

  // const fn = jest
  //   .fn() // можем ченить наши методы и имплементации:
  //   .mockReturnValue('End')
  //   .mockReturnValueOnce('42')
  //   .mockReturnValueOnce('Greetings!')
  // console.log(fn()) // первый вызов fn() отработает с методом mockReturnValueOnce() вернет 42
  // console.log(fn()) // второй вызов fn() отработает с методом mockReturnValueOnce() вернет Greetings!
  // console.log(fn()) // третий и последующие вызовы fn() отработают с методом mockReturnValue() будут возвращать End несмотря на то что mockReturnValue стоит в начале цепочки вызовов

  // const fn = jest
  //   .fn()
  //   .mockResolvedValue(42)
  // console.log(await fn())

  // const fn = jest
  //   .fn()
  //   .mockResolvedValue(42)
  // expect(fn()).resolves.toBe(42)

  // const fn = jest
  //   .fn()
  //   .mockResolvedValueOnce(42)
  //   .mockResolvedValueOnce('Greetings!')
  // expect(fn()).resolves.toBe(42)
  // expect(fn()).resolves.toBe('Greetings!')
  
  // const fn = jest
  //   .fn()
  //   .mockRejectedValue('42')
  // expect(fn()).rejects.toBe('42')
  
  const fn = jest
    .fn()
    .mockName('Mocked function') // эта строка сделает нашу мокированную функцию именованной "Mocked function" повышает читаемость тестов, подсказывая какой тест не прошел и какая функция сломалась, за счет ее имени
  expect(fn).toHaveBeenCalled()
  
})

//  npm run test -- MokingFunctionsImplementationsAdditionalMethods.spec.tsx --watch
