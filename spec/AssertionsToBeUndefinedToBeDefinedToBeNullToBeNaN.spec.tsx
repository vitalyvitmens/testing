//! Мэтчеры для проверки наличия значения:
//! toBeUndefined() - ожидает значение undefined
//! toBeDefined() - ожидает значение не undefined
//! toBeNull() - ожидает значение null
//! toBeNaN() - ожидает значение NaN

it('Строгое сравнение значений', () => {
  expect({}).toEqual({})
})

it.only('Проверка наличия значения', () => {
  const a = null

  // expect(a).toBeUndefined() // тест проходит так как toBeUndefined ожидает undefined и получает undefined

  // expect(a).toBeDefined() // тест упадет так как toBeDefined проверяет значения на undefined, он возвращает true для любых значений из левой части, кроме undefined, но если написать: const a = null, то тест пройдет

  // expect(a).toBeNull() // тест упадет так как toBeNull ожидает null, а получает undefined, но если написать: const a = null, то тест пройдет

  // expect(a).toBeNaN() // тест упадет так как toBeNaN ожидает NaN, а получает undefined, но если написать: const a = NaN или: const a = 2 + Number('a'), то тест пройдет

  // expect(Object.is(2 + Number('a'), NaN)).toBe(true) // тест пройдет так как toBe ожидает true, и получает true, так как 2 + Number('a') = NaN

  expect(Object.is(NaN, NaN)).toBe(true) // в JS NaN != NaN (самому себе) console.log(NaN === NaN) = false, но если написать как в данном примере, то тест пройдет
})

// npm run test -- AssertionsToBeUndefinedToBeDefinedToBeNullToBeNaN.spec.tsx --watch
