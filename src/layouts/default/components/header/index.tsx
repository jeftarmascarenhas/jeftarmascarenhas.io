import { useState } from 'react'
import {
  Divider,
  HStack,
  Stack,
  Tag,
  Text,
  VStack,
  useMediaQuery,
  IconButton
} from '@chakra-ui/react'
import { IoMenu } from 'react-icons/io5'
import Link from 'next/link'
import { Navbar } from '../nav-bar'
import { useOutsideClick } from '@hooks/use-outside-click'

export default function Header() {
  const [openNavBar, setOpenNavBar] = useState(false)
  const [isMobile] = useMediaQuery('(min-width: 768px)')

  const handleToggle = () => {
    setOpenNavBar(!openNavBar)
  }
  const ref = useOutsideClick(event => {
    handleToggle()
  })

  return (
    <VStack align="stretch" px={{ base: 4, md: 10, lg: 10, xl: 20 }}>
      <Stack direction={['row']} justify="space-between" align="center" pt="4">
        <Link href="/">
          <HStack
            spacing={0}
            fontSize="2xl"
            fontWeight="bold"
            textTransform="uppercase"
            as="h1"
          >
            <Tag
              rounded="full"
              variant="solid"
              colorScheme="teal"
              fontWeight="bold"
              fontSize="2xl"
            >
              Jeff
            </Tag>
            <Text as="span">Mascarenhas</Text>
          </HStack>
        </Link>
        {!isMobile && (
          <IconButton
            aria-label="Open main manu"
            rounded="full"
            bgColor="transparent"
            icon={<IoMenu size={24} />}
            onClick={handleToggle}
          />
        )}
        {(isMobile || openNavBar) && (
          <Navbar onClose={handleToggle} ref={ref} />
        )}
      </Stack>
      <Divider />
    </VStack>
  )
}
