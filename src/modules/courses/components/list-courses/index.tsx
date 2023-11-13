import {
  HStack,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import CardCourse from '@global-components/card-course'
// import UserSubscriptionModal from '@global-components/modals/user-subscription-modal'
import Image from 'next/image'

export default function ListCourses() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const handleClickCourse = () => {
  //   onOpen()
  // }
  return (
    <>
      <VStack py="8" align="stretch" as="section">
        <HStack
          align="center"
          pb="4"
          fontSize={{ base: '20', md: '2xl', xl: '3xl' }}
        >
          <Text as="h2" fontWeight="semibold">
            Cursos.
          </Text>
          <Text as="h3" fontWeight="semibold" color="gray.500">
            Aprendizado e novidades
          </Text>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 2 }} spacing="10">
          <CardCourse
            href="/courses/curso-supply-chain-web3-polygon-blockchain"
            info={{
              type: `Lançamento - Dezembro 2023`,
              title: `Curso Supply Chain Web3 com Polygon Blockchain`,
              resume: `Aprenda a desenvolver um sistema de supply chain baseado em smart contracts com técnicas avançadas de Solidity, API em Nodejs e um front-end com Next.js para gerenciar toda a cadeia de suprimentos.`
            }}
            image={
              <VStack align="center" py="4">
                <Image
                  src="/assets/images/courses/supply-chain1.png"
                  width={125}
                  height={196}
                  alt="Curso Supply Chain Web3 com Polygon Blockchain"
                />
              </VStack>
            }
          />
          <CardCourse
            href="/courses/curso-blockchain-ethersjs"
            info={{
              type: `Lançamento - Janeiro 2024`,
              title: `Curso Blockchain Ethers.js`,
              resume: `Guia completo do zero ao avançado. Aprenda a utilizar Ethers.js para interagir com blockchain, smart contract, criar Dapps e APIs.`
            }}
            image={
              <VStack align="center" py="4">
                <Image
                  src="/assets/images/courses/ethersjs.png"
                  width={125}
                  height={196}
                  alt="Curso Blockchain Ethers.jS"
                />
              </VStack>
            }
          />
        </SimpleGrid>
      </VStack>
      {/* <UserSubscriptionModal isOpen={isOpen} onClose={onClose} /> */}
    </>
  )
}
