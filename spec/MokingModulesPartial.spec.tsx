//! Частичное мокирование модулей
//! создаем для этого модуль src\utils\helpers.ts
import { validateHeader, sayHi } from '../src/utils/helpers'

jest.mock('../src/utils/helpers', () => {
  const realHelpers = jest.requireActual('../src/utils/helpers')
  return {
    // __esModule: true, // если пользуемся не сборщиками а нативными es6 модулями, тогда раскомментируй строку
    ...realHelpers,
    validateHeader: jest.fn(() => 42),
  }
})

it('Частичное мокирование модулей', () => {
  const isHeaderInvalid = validateHeader(
    'Пример не валидного заголовка длиннее 32 символов'
  )

  console.log(isHeaderInvalid)

  console.log(sayHi())
})

//  npm run test -- MokingModulesPartial.spec.tsx --watch
