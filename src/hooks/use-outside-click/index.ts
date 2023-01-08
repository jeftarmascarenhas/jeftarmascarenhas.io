import { useEffect, useRef, MutableRefObject } from 'react'

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(ref.current)
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        callback()
        event.stopPropagation()
      }
    }
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref, callback])

  return ref
}
