import {
  HStack,
  Stack,
  Text,
  IconButton,
  keyframes,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import Link from 'next/link'
import { MutableRefObject, forwardRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const navBarMobile = keyframes`
  from {
    bottom: -50vh;
  }
  to {
    bottom: 0;
  }
`

export const Navbar = forwardRef(
  (
    {
      onClose
    }: {
      onClose: () => void
    },
    ref
  ) => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const animation = prefersReducedMotion
      ? undefined
      : `${navBarMobile} .28s alternate ease-in-out`

    return (
      <Stack
        ref={ref as any}
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 6, lg: 8 }}
        style={{
          marginInlineStart: 0
        }}
        alignItems="center"
        as="nav"
        fontSize={{ base: 'lg', sm: 'sm', lg: 'md' }}
        fontWeight={{ base: 'medium', sm: 'normal', md: 'normal' }}
        position={{
          base: 'fixed',
          md: 'initial'
        }}
        bottom={{ base: 0, md: 'auto' }}
        left={{ base: 0 }}
        animation={{ base: animation, md: undefined }}
        width={{ base: 'full', md: 'auto' }}
        pb={{ base: '6', md: 0 }}
        backgroundColor={{ base: 'whiteAlpha.400' }}
        backdropFilter={{ base: 'blur(20px)' }}
        borderTop={{ base: '1px solid rgba(0,0,0,0.1)', md: 'none' }}
        zIndex={{ base: 2 }}
      >
        <HStack alignSelf="flex-end" py={2} px={2} display={{ md: 'none' }}>
          <IconButton
            aria-label="Close main manu"
            icon={<IoCloseOutline size={24} />}
            backgroundColor="transparent"
            onClick={onClose}
          />
        </HStack>
        <Text as={Link} href="/courses" onClick={onClose}>
          Cursos
        </Text>

        <Text as={Link} href="/" onClick={onClose}>
          Blog
        </Text>

        <Text as={Link} href="/videos" onClick={onClose}>
          Vídeos
        </Text>

        <Text as={Link} href="/work-journal" onClick={onClose}>
          Diário de Trabalho
        </Text>

        <Text as={Link} href="/" onClick={onClose}>
          Projetos
        </Text>
      </Stack>
    )
  }
)

Navbar.displayName = 'Navbar'
