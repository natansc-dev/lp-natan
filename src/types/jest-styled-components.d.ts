/* eslint-disable @typescript-eslint/ban-types */
import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: simbol
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sample?: string | RegExp | object | Array<any> | Function
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }

    interface Matchers<R> {
      toHaveStyleRule(prperty: string, value?: Value, options?: Options): R
    }
  }
}

export declare const styleSheetSerializer: Exclude<Plugin, NewPlugin>
