export const getLocalStore = (key, options = { parser: false }) => {
  if (!key) throw Error('Informe a chave')
  if (options.parser) return JSON.parse(window.localStorage.getItem(key))
  return window.localStorage.getItem(key)
}

export const setLocalStore = (key, value, options = { stringify: false }) => {
  if (!key || value === null) throw Error('Informe a chave e valor')
  if (options.stringify) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}
