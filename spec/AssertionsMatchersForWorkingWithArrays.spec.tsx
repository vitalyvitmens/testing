//! Мэтчеры для работы с массивами:
//! toContain() - проверяет наличие элемента в массиве
//! toContainEqual() - проверяет наличие элемента в массиве, но игнорирует поля undefined
//! toHaveLength() - проверяет длину массива

it('Работа с объектами', () => {
  const value1: unknown[] = ['item1', 'item2', 'item3']
  const value2: unknown[] = [{ name: 'a' }, { label: 'b' }]

  // expect(value1).toContain('item2') // тест пройдет, т.к. toContain - проверяет наличие элемента 'item2' в массиве, а он там присутствует

  // expect(value2).toContainEqual({ label: 'b', name: undefined }) // тест пройдет, т.к. toContainEqual - проверяет наличие элемента { label: 'b' } в массиве, а он там присутствует. Так же toContainEqual игнорирует поля undefined

  // expect('Greetings!').toContain('!') // тест пройдет, так как это еще один мэтчер который позволяет работать как со строками так и с массивами

  expect(value2).toHaveLength(2) // тест пройдет, так как ожидаемое значение 2 полученное значение 2

  // expect(value2.length === 2).toBe(true) // тест пройдет, так как ожидаемое значение 2 полученное значение 2. Это альтернативный вид записи expect(value2).toHaveLength(2)
})

// npm run test -- AssertionsMatchersForWorkingWithArrays.spec.tsx --watch
