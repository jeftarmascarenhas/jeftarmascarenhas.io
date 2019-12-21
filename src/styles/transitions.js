const defaultTiming = '0.39s ease'
const bgTransition = `background ${defaultTiming}`
const colorTransition = `color ${defaultTiming}`
const defaultTransition = `${bgTransition}, ${colorTransition}`

export default {
  default: defaultTransition,
  color: colorTransition,
  background: bgTransition,
  all: defaultTiming,
}
