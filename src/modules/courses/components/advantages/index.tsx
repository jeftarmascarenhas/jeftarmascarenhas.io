import { Box, SimpleGrid } from '@chakra-ui/react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiFillPlayCircle } from 'react-icons/ai'
import { GrTest } from 'react-icons/gr'
import CardInfo from '../card-Info'

export default function Advantages() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
      <CardInfo
        title="Aprenda com quem tem experiência de mercado"
        icon={
          <Box color="green.400">
            <FaChalkboardTeacher size={30} />
          </Box>
        }
      />
      <CardInfo
        title="Assista onde quiser
          com aulas gravadas
          e atualizadas"
        icon={
          <Box color="red.500">
            <AiFillPlayCircle size={30} />
          </Box>
        }
      />
      <CardInfo
        title="Metodologia que fixa
          o aprendizado para ser aprovado nas entrevistas"
        icon={
          <Box
            _first={{
              path: {
                stroke: 'purple.500'
              }
            }}
          >
            <GrTest size={30} />
          </Box>
        }
      />
    </SimpleGrid>
  )
}
