import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function MaxContent({ children }: { children: ReactNode }) {
  return <Box maxWidth="1585px">{children}</Box>
}
