import {
  Box,
  Button,
  Input,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as YUP from 'yup'
import { NewsletterForm, Props } from './types'

const formEmailSchema = YUP.object({
  email: YUP.string().email('email invalid').required('is required')
})

export default function NewsletterSubscribe({ email, onSubmit }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<NewsletterForm>({
    resolver: yupResolver(formEmailSchema)
  })
  const handleOnSubmit = handleSubmit(data => {
    onSubmit(data)
  })
  return (
    <form onSubmit={handleOnSubmit}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} alignItems="center" spacing={10}>
        <VStack align="stretch">
          <Box>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel
                as="label"
                htmlFor="email"
                fontWeight="medium"
                fontSize="larger"
                marginBottom="2"
              >
                Receba posts, vídeos e cursos
              </FormLabel>
              <Input
                mt="2"
                placeholder="Digite seu email"
                type="email"
                id="email"
                size="lg"
                bgColor="white"
                {...register('email')}
                _focusVisible={{
                  borderColor: 'inherit'
                }}
              />
              {errors?.email && errors.email.message && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormControl>
          </Box>
        </VStack>
        <Button type="submit" bg="black" color="white" rounded="full" size="lg">
          Inscrever-se
        </Button>
      </SimpleGrid>
    </form>
  )
}
