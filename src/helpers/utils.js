export const getLocalStore = (key, options = { parser: false }) => {
  if (!key) throw Error('Informe a chave')
  if (options.parser) return JSON.parse(localStorage.getItem(key))
  return localStorage.getItem(key)
}

export const setLocalStore = (key, value, options = { stringify: false }) => {
  if (!key || value === null) throw Error('Informe a chave e valor')
  if (options.stringify) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}
