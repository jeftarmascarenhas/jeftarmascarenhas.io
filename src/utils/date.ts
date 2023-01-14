import { string } from 'yup'

export const isValidDate = (date: Date | string) =>
  Object.prototype.toString.call(date) === '[object Date]' ||
  Object.prototype.toString.call(date) === '[object String]'

export const { format: formatDate } = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC'
})

export const formatDateJS = (date: Date | string) => {
  if (!isValidDate(date)) return 'invalid date'
  return formatDate(new Date(date))
}
