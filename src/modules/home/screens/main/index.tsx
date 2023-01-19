import { Box, Divider } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import MaxContent from '@global-components/max-content'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'
import Bio from './components/Bio'
import Life from './components/Life'
import Links from './components/Links'

export default function HomeScreen() {
  return (
    <DefaultContainer>
      <MaxContent>
        <Box pt={{ base: 10, md: 10 }} px={{ base: 4, lg: 16 }}>
          <Bio />
        </Box>
        <Box pt={{ base: 10, md: 20 }} px={{ base: 4, lg: 16 }}>
          <Links />
        </Box>
        <Box pt={{ base: 10, md: 20 }} px={{ base: 4, lg: 16 }}>
          <Life />
        </Box>
        <Box py={{ base: 10, md: 20 }} px={{ base: 4, lg: 16 }}>
          <Divider borderColor="gray.300" />
          <Box py={6}>
            <NewsletterSubscribe />
          </Box>
          <Divider borderColor="gray.300" />
        </Box>
      </MaxContent>
    </DefaultContainer>
  )
}
