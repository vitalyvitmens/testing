//! Мэтчеры для работы с объектами:
//! toHaveProperty() - проверяет наличие свойства в объекте по имени свойства
//! toEqual() - проверяет равенство свойств и их значений в сравниваемых объектах, не учитывая разные объекты и поля undefined, а учитывает только набор заполненных полей
//! toStrictEqual() - проверяет строгое равенство двух объектов
//! toMatchObject() - проверяет частичное соответствие полей объектов

it('Работа с объектами', () => {
  const value = {
    name: 'Egor',
    nested: {
      name: 'schoolboy',
    },
    items: ['child1', 'child2'],
  }

  // expect(value).toHaveProperty('nested.name') // тест пройдет, т.к. toHaveProperty - проверяет наличие свойства в объекте по имени свойства, даже вложенные объекты и их свойства (пример: value.nested.name)

  // expect(value).toMatchObject({
  //   name: 'Egor',
  // }) // тест пройдет, т.к. toMatchObject - проверяет частичное соответствие полей объектов

  // expect(value).toMatchObject({
  //   nested: {},
  // }) // тест пройдет, т.к. toMatchObject - проверяет частичное соответствие полей объектов

  // expect(value).toMatchObject({
  //   nested: {
  //     name: 'boy',
  //   },
  // }) // тест не пройдет

  expect(value).toMatchObject({
    nested: {},
    items: ['child1', 'child2'],
  }) // тест пройдет
})

// npm run test -- AssertionsMatchersForWorkingWithObjects.spec.tsx --watch
