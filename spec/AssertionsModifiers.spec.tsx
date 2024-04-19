//! Модификаторы - изменяют поведение мэтчеров, а так же применяются для работы с Promise:
//! not - изменяет поведение мэтчера на противоположное например true на false, false на true, not равносилен ! в значениях в JS
//! resolves - модификатор проверяет, что Promise выполнен успешно
//! rejects - модификатор проверяет, что Promise выполнен с ошибкой

it('Работа с модификаторами', async () => {
  expect(1 + 2).not.toBe(4) // Тест выполнится, хоть 1 + 2 != 3, но модификатор not изменяет поведение мэтчера toBe на противоположное

  /* Еще пример с not смотри в файле spec\expectCustomAsymmetricalMatcherForInput.spec.tsx на 25 строке, не забыв расширить interface в файле jest.d.ts:    
    interface InverseAsymmetricMatchers {
      toHaveDoneItem(): any // расширяет матчер not "not.toHaveDoneItem()" для файла spec\expectCustomAsymmetricalMatcherForInput.spec.tsx
    }
*/

  const promiseToResolve = Promise.resolve('Resolved!')
  const promiseToReject = Promise.reject(new Error('Rejected!'))

  await expect(promiseToResolve).resolves.toBe('Resolved!')
  await expect(promiseToReject).rejects.toThrow('Rejected!')
})

// npm run test -- AssertionsModifiers.spec.tsx --watch
