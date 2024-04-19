type OwnMatcher<Params extends unknown[]> = (
  this: jest.MatcherContext,
  received: unknown,
  ...actual: Params
) => jest.CustomMatcherResult | Promise<jest.CustomMatcherResult>

declare global {
  namespace jest {
    interface Expect {
      toHaveDoneItem(): any
    }
    interface InverseAsymmetricMatchers {
      toHaveDoneItem(): any // расширяет матчер not "not.toHaveDoneItem()" для файла spec\expectCustomAsymmetricalMatcherForInput.spec.tsx
    }
    interface Matchers<R, T> {
      toBeShorterThan(len: number): T
    }
    interface ExpectExtendMap {
      toBeShorterThan: OwnMatcher<[len: number]>
    }
  }
}

export {}
