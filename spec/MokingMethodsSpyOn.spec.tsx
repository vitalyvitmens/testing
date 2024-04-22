//! Мокирование существующего метода с jest.spuOn()
//! используется для слежения за внешними зависимостями, которыми не можешь управлять сам
it('Мокируем методы', async () => {
  const fn = jest.spyOn(console, 'error')

  fn.mockImplementation(() => 42)

  console.error('Ошибка!')

  console.log(fn.mock)
  expect(fn).toHaveBeenCalledWith('Ошибка!')
  expect(fn).toHaveReturned() // матчэр toHaveReturned проверяет что функция завершилась не с ошибкой и завершилась вообще и смотрит на type в объекте внутри массива поля results
  expect(fn).toThrow() // матчэр toThrow проверяет что функция завершилась с ошибкой и в results содержится объект к type Error. В данном случае тест не пройдет, что бы прошёл можно добавить мэтчер not: expect(fn).not.toThrow()

  // fn.mockRestore()
  // console.log(fn.mock)

  // console.error('Ошибка!2')
})

//  npm run test -- MokingMethodsSpyOn.spec.tsx --watch
