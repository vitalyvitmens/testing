import '@testing-library/jest-dom'
import { toBeShorterThan } from './spec/custom-matchers/toBeShorterThan'

expect.extend({
  toBeShorterThan,
})
