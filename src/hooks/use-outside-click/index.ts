import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: (event: MouseEvent) => void) => {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        callback(event)
      }
    }
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref, callback])

  return ref
}
