//! Асимметричные мэтчеры:

// Определяем новый тестовый случай с названием 'Работа с объектами'
it('Работа с объектами', () => {
  // Создаем объект value с различными свойствами для тестирования
  const value = {
    name: 'Greetings!', // Строка
    items: ['item1', 'item2'], // Массив со строками
    child: {
      name: 'Egor', // Объект с двумя свойствами: строка и число
      age: 15,
    },
    amount: 0.1 + 0.2, // Вычисляемое числовое значение
  }

  // //! Первая проверка: ожидаем, что объект value соответствует указанной структуре
  // expect(value).toEqual({
  //   name: expect.any(String), // Проверяем, что свойство name является строкой
  //   items: expect.arrayContaining(['item2']), // Проверяем, что массив items содержит элемент 'item2'
  //   child: expect.objectContaining({ age: expect.any(Number) }), // Проверяем, что объект child содержит свойство age с числовым значением
  //   amount: expect.closeTo(0.3), // Проверяем, что свойство amount близко к числу 0.3 с учетом погрешности вычислений с плавающей точкой
  // })

  //! Вторая проверка: ожидаем, что объект value соответствует другой указанной структуре
  expect(value).toEqual({
    name: expect.stringMatching(/ee/i), // Проверяем, что свойство name содержит две буквы 'e', независимо от регистра
    items: expect.arrayContaining(['item2']), // Проверяем, что массив items содержит элемент 'item2'
    child: expect.objectContaining({ age: expect.any(Number) }), // Проверяем, что объект child содержит свойство age с числовым значением
    amount: expect.closeTo(0.3), // Проверяем, что свойство amount близко к числу 0.3 с учетом погрешности вычислений с плавающей точкой
  })
})

// npm run test -- AssertionsAsymmetricalMatchers.spec.tsx --watch
