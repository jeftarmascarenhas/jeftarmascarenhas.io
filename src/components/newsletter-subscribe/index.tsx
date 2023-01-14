import {
  Box,
  Button,
  Input,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react'
import fetch from 'isomorphic-unfetch'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as YUP from 'yup'
import { NewsletterForm, Props } from './types'
import { useState } from 'react'

const formEmailSchema = YUP.object({
  email: YUP.string().email('email invalid').required('is required')
})

export default function NewsletterSubscribe({
  onSubmit,
  title = 'Receba posts, vídeos e cursos',
  buttonName = 'Inscrever-se'
}: Props) {
  const [loading, setLoading] = useState(false)
  const toast = useToast({
    position: 'top-right'
  })
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField
  } = useForm<NewsletterForm>({
    resolver: yupResolver(formEmailSchema)
  })
  const handleOnSubmit = handleSubmit(async data => {
    if (onSubmit) {
      onSubmit(data)
      return
    }
    try {
      setLoading(true)
      const resp = await fetch('/api/users/subscriber-user', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      if (!resp.ok) {
        const error = await resp.json()
        throw error
      }

      const { message } = await resp.json()

      toast({
        title: message || 'Email Cadastro com sucesso.'
      })
      resetField('email')
    } catch (error: any) {
      console.log(error)
      toast({
        title:
          error?.error || error.message || 'Houve um erro, tente novamente.',
        status: 'error'
      })
    } finally {
      setLoading(false)
    }
  })
  return (
    <form onSubmit={handleOnSubmit}>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 1 }}
        alignItems="center"
        spacing={10}
      >
        <VStack align="stretch">
          <Box>
            <FormControl isInvalid={!!errors.email} isDisabled={loading}>
              <FormLabel
                as="label"
                htmlFor="email"
                fontWeight="medium"
                fontSize="larger"
                marginBottom="2"
              >
                {title}
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
        <Button
          type="submit"
          bg="black"
          color="white"
          rounded="full"
          size="lg"
          isLoading={loading}
          _hover={{
            bgColor: 'blackAlpha.900'
          }}
        >
          {buttonName}
        </Button>
      </SimpleGrid>
    </form>
  )
}
