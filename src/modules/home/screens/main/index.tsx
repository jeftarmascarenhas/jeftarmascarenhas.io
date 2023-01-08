import { Box, Divider } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'
import Bio from './components/Bio'
import Life from './components/Life'
import Links from './components/Links'

export default function HomeScreen() {
  return (
    <DefaultContainer>
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
          <NewsletterSubscribe onSubmit={data => console.log(data)} />
        </Box>
        <Divider borderColor="gray.300" />
      </Box>
    </DefaultContainer>
  )
}
