export default class ObjectHelper {
  static updateUsingDotNotation(object, dotNotation, value) {
    const obj = object
    const keys = dotNotation.split('.')

    keys.reduce((p, c, index) => {
      if (index === keys.length - 1) {
        if (typeof p[c] !== 'object') {
          // string, number, boolean, null, undefined
          p[c] = value
        }
        return p[c]
      } else {
        if (!p[c] || typeof p[c] !== 'object') {
          p[c] = {}
        }
        return p[c]
      }
    }, obj)

    return obj
  }
}
