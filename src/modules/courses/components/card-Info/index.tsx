import { Text, VStack } from '@chakra-ui/react'
import { Props } from './types'

export default function CardInfo({ icon, title }: Props) {
  return (
    <VStack
      align="stretch"
      borderWidth="1px"
      borderColor="gray.300"
      rounded="lg"
      py={8}
      px={6}
      spacing="4"
    >
      {icon}
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
    </VStack>
  )
}
