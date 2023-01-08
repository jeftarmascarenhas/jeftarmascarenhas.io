import { HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import CardCourse from '@global-components/card-course'
import Image from 'next/image'
import React from 'react'

export default function ListCourses() {
  return (
    <VStack py="8" align="stretch" as="section">
      <HStack align="center" pb="4" fontSize={{ base: '2xl', xl: '3xl' }}>
        <Text as="h2" fontWeight="semibold">
          Cursos.
        </Text>
        <Text as="h3" fontWeight="semibold" color="gray.500">
          Depoimentos e novidades
        </Text>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="10">
        <CardCourse
          href="/courses"
          info={{
            type: `Iniciante`,
            title: `Base Blockchain Ethereum`,
            price: `R$ 200,00`,
            resume: `Seja um profissional completo com conhecimento em Solidity e desenvolvendo projetos completos.`
          }}
          image={
            <VStack align="center" py="4">
              <Image
                src="/assets/images/courses/solidity.png"
                width={125}
                height={196}
                alt="Base Blockchain Ethereum"
              />
            </VStack>
          }
        />
        <CardCourse
          href="/courses"
          bgColor="blackAlpha.900"
          modeType="dark"
          info={{
            type: `Intermediário`,
            title: `Pensando do jeito
              React`,
            price: `R$ 80,00`,
            resume: `Aprenda a componentizar de forma simples e profissional.`
          }}
          image={
            <VStack align="center" py="4">
              <Image
                src="/assets/images/courses/react.png"
                width={245}
                height={213}
                alt="Base Blockchain Ethereum"
              />
            </VStack>
          }
        />
        <CardCourse
          href="/courses"
          info={{
            type: `Iniciante`,
            title: `Base Blockchain Ethereum`,
            price: `R$ 200,00`,
            resume: `Seja um profissional completo com conhecimento em Solidity e desenvolvendo projetos completos.`
          }}
          image={
            <VStack align="center" py="4">
              <Image
                src="/assets/images/courses/solidity.png"
                width={125}
                height={196}
                alt="Base Blockchain Ethereum"
              />
            </VStack>
          }
        />
      </SimpleGrid>
    </VStack>
  )
}
