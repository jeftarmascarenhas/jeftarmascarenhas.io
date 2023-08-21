import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const fullYear = new Date().getFullYear()
  return (
    <Box p="6">
      <Text textAlign="center">Copyright © {fullYear} Jeftar Mascarenhas. Todos so direitos reservados</Text>
    </Box>
  )
}
