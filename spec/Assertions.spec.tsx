//! Мэтчеры для строгого сравнения значений:
//! toBe - сравнение значений примитивов или когда в левой части вызывается проверка Object.is(1 + 2, 3), а в правой части только проверяется его выполнение например вернуло оно true или false
//! toEqual - сравнение значений, не учитывающее разные экземпляры, разные объекты и поля undefined, а учитывает только набор заполненных полей
//! toStrictEqual - строгое сравнение значений, учитывающее разные классы, разные экземпляры классов, разные объекты и поля undefined

class TestValue {
  value: string
  label: string
  constructor(value: string, label: string) {
    this.value = value
    this.label = label
  }
}

class TestValue2 {
  value: string
  label: string
  constructor(value: string, label: string) {
    this.value = value
    this.label = label
  }
}

it('Строгое сравнение значений', () => {
  // expect(1 + 2).toBe(3) // расчитываем 1 + 2 и ожидаем, что равен 3

  // expect(Object.is(1 + 2, 3)).toBe(true) // 1 + 2 = 3, ожидаем true

  // expect(typeof 'Greetings').toBe('string') // ожидаем тип 'string'

  // expect(typeof (1 + 2)).toBe('number') // ожидаем тип 'number'

  // expect({}).toBe({}) // передаем пустой obj и сравниваем его с пустым obj, тест провалим, так как сравниваем ссылки

  // expect({}).toEqual({}) // передаем пустой obj и сравниваем его с пустым obj, тест проходит, так как toEqual() сравнивает содержимое

  // expect({
  //   value: 'test',
  //   item: 77,
  //   isAsseertions: true,
  // }).toEqual({
  //   value: 'test',
  //   item: 77,
  //   isAsseertions: true,
  // }) // передаем obj и сравниваем его с другим obj, тест проходит, так как toEqual() сравнивает содержимое

  // expect({
  //   value: 'test',
  //   label: undefined,
  // }).toEqual({
  //   value: 'test',
  //   rest: undefined,
  // }) // передаем obj и сравниваем его с другим obj, тест проходит, так как toEqual() не учитывает поля undefined

  // expect({
  //   value: 'test',
  //   label: undefined,
  // }).toStrictEqual({
  //   value: 'test',
  //   rest: undefined,
  // }) // передаем obj и сравниваем его с другим obj, тест не проходит, так как toStrictEqual() учитывает учитывает поля undefined

  const TestClassValue = new TestValue('test', 'label')
  const TestClassValue2 = new TestValue2('test', 'label')

  // expect(TestClassValue).toStrictEqual({
  //   value: 'test',
  //   label: 'label',
  // }) // тест не проходит, так как toStrictEqual()

  // expect(TestClassValue).toEqual({
  //   value: 'test',
  //   label: 'label',
  // }) // тест проходит, так как toEqual()

  // expect(TestClassValue).toStrictEqual(TestClassValue2) // тест не проходит так как значения хоть и однинаковы, но они являются экземплярами разных классов

  expect(TestClassValue).toEqual(TestClassValue2) // тест проходит так как toEqual() сравнивает значения, не взирая на разные экземпляры классов и поля undefined
})

// npm run test -- Assertions.spec.tsx --watch
