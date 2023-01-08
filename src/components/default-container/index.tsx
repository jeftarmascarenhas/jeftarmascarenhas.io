import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function DefaultContainer({
  children
}: {
  children: ReactNode
}) {
  return <Box px={{ base: 4, md: 10, lg: 10, xl: 20 }}>{children}</Box>
}
