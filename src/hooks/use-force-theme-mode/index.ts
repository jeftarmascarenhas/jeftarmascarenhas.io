import { useColorMode, ColorMode } from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'

export const useForceThemeMode = (themeMode: ColorMode) => {
  const { setColorMode } = useColorMode()
  const handleMode = useCallback(() => {
    setColorMode(themeMode)
  }, [setColorMode, themeMode])

  useEffect(() => {
    if (themeMode) {
      handleMode()
    }
  }, [handleMode, themeMode])
}
