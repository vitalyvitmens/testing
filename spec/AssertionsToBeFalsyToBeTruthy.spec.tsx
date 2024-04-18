//! Мэтчеры для булевого сравнения:
//! toBeFalsy() - проверяет, что значение является ложным
//! toBeTruthy() - проверяет, что значение является истинным

it('Строгое сравнение значений', () => {
  expect({}).toEqual({})
})

it.only('Булево сравнение', () => {
  const value = 'null' // приведение к булевому значению строки 'null' это true

  const value1 = '' // приведение к булевому значению пустой строки это false
  const value2 = 0 // приведение к булевому значению нуля это false
  const value3 = undefined // приведение к булевому значению undefined это false
  const value4 = null // приведение к булевому значению null это false
  const value5 = NaN // приведение к булевому значению NaN это false
  const value6 = false // приведение к булевому значению false это false

  const arr: unknown = [] // приведение к булевому значению пустого массива это true

  console.log('Boolean(value)', !!value) // true
  console.log('Boolean(value1)', Boolean(value1)) // false
  console.log('Boolean(value2)', Boolean(value2)) // false
  console.log('Boolean(value3)', Boolean(value3)) // false
  console.log('Boolean(value4)', Boolean(value4)) // false
  console.log('Boolean(value5)', Boolean(value5)) // false
  console.log('Boolean(value6)', Boolean(value6)) // false

  // expect(value1).toBeFalsy() // тест пройдет, здесь мы хотим проверить что булево значение: const value1 = '' конвертируется в false

  // expect(value).toBeTruthy() // тест пройдет, здесь мы хотим проверить что булево значение: const value = 'null' конвертируется в true

  expect(arr).toBeTruthy() // тест пройдет, здесь мы хотим проверить что булево значение: const arr: unknown = [] конвертируется в true
})

// npm run test -- AssertionsToBeFalsyToBeTruthy.spec.tsx --watch
