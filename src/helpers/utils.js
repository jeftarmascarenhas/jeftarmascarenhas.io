const windowGlobal = typeof window !== `undefined` ? window : null
export const getLocalStore = (key, options = { parser: false }) => {
  if (!windowGlobal) return
  if (!key) throw Error('Informe a chave')
  if (options.parser) return JSON.parse(windowGlobal.localStorage.getItem(key))
  return windowGlobal.localStorage.getItem(key)
}

export const setLocalStore = (key, value, options = { stringify: false }) => {
  if (!windowGlobal) return
  if (!key || value === null) throw Error('Informe a chave e valor')
  if (options.stringify) {
    windowGlobal.localStorage.setItem(key, JSON.stringify(value))
  } else {
    windowGlobal.localStorage.setItem(key, value)
  }
}
