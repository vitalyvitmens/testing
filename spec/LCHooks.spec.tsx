//! Хуки жизненного цикла теста:
//! 1). beforeAll - выполняется перед всеми тестами
//! 2). afterAll - выполняется после всех тестов
//! 3). beforeEach - выполняется перед каждым тестом
//! 4). afterEach - выполняется после каждого теста
//! Их используют вне describe и вне теста, внутри теста нельзя использовать, а вот внутри describe можно

beforeAll(() => console.log('1 - beforeAll'))
beforeEach(() => console.log('1 - beforeEach'))

test('', () => console.log('1 - test'))

afterEach(() => console.log('1 - afterEach'))
afterAll(() => console.log('1 - afterAll'))

describe('', () => {
  beforeAll(() => console.log('2 - beforeAll'))
  beforeEach(() => console.log('2 - beforeEach'))

  test('', () => console.log('2 - test'))

  afterEach(() => console.log('2 - afterEach'))
  afterAll(() => console.log('2 - afterAll'))
})

// npm test -- LCHooks.spec.tsx --watch
