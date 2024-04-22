//! Мокирование модулей
//! создаем для этого модуль src\utils\helpers.ts
import { validateHeader } from '../src/utils/helpers'

jest.mock('../src/utils/helpers') // после этого jest автоматически будет подменять все функции модуля jest.fn() с undefined, что бы посмотреть на оригинальную отработку метода validateHeader закомментируй эту строку

it('Мокируем модули', async () => {
  const isHeaderValid = validateHeader('Пример валидного заголовка')

  console.log(isHeaderValid)

  const isHeaderInvalid = validateHeader(
    'Пример не валидного заголовка длиннее 32 символов'
  )

  console.log(isHeaderInvalid)
})

//  npm run test -- MokingModules.spec.tsx --watch
