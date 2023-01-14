export const timeToRead = (text: any) => {
  const words = text.split(' ')
  const minutes = Math.ceil(words.length / 200)
  return `${minutes} min de leitura`
}

export const unique = (val: any, index: number, self: any): boolean => {
  return self.indexOf(val) === index
}
