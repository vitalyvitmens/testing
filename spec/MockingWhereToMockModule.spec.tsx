//! Где мокировать модуль?
import { validateHeader } from '../src/utils/helpers'

//! Сейчас макирование работает на уровне всего тестового приложения, так как в файле jest.setup.js прописано это:
//! jest.mock('./src/utils/helpers', () => ({
//!   ...jest.requireActual('./src/utils/helpers'),
//!   validateHeader: jest.fn().mockReturnValue(false),
//! }))
it('Где мокировать модуль?', () => {
  const isHeaderInvalid = validateHeader(
    'Пример не валидного заголовка длиннее 32 символов'
  )

  console.log(isHeaderInvalid)
})

// //! Что бы jest.mock использовать внутри теста используй require, но перед этим добавь в файл tsconfig.json поле "types": ["@testing-library/jest-dom", "node"],
// //! НО ЭТО НЕ ЖЕЛАТЕЛЬНАЯ ИДЕЯ
// it('Где мокировать модуль?', () => {
//   jest.mock('../src/utils/helpers')

//   const { validateHeader } = require('../src/utils/helpers')
//   const isHeaderInvalid = validateHeader(
//     'Пример не валидного заголовка длиннее 32 символов'
//   )

//   console.log(isHeaderInvalid)
// })

//  npm run test -- MockingWhereToMockModule.spec.tsx --watch
