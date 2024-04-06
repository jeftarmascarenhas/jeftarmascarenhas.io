import { Courses } from '@global-entities/course'
import CardCourse from '@global-components/card-course'
import { Text, VStack, HStack, Image, SimpleGrid } from '@chakra-ui/react'
// import UserSubscriptionModal from '@global-components/modals/user-subscription-modal'

export default function ListCourses({ courses }: { courses: Courses }) {
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
          {courses?.length &&
            courses?.map(course => (
              <CardCourse
                key={course.id}
                href={course?.slug}
                info={{
                  type: course?.date,
                  title: course?.title,
                  resume: course?.description
                }}
                image={
                  <VStack align="center" py="4">
                    <Image
                      width={125}
                      borderRadius="md"
                      objectFit="contain"
                      alt={course?.title}
                      src={course?.thumbnail}
                      height={{ base: 'auto', md: 196 }}
                      maxWidth={{ base: 'auto', md: 295 }}
                      minWidth={{ base: 'auto', md: 295 }}
                      fallbackSrc="https://via.placeholder.com/150/1ED760/000000?text=Jeff%20Mascarenhas"
                    />
                  </VStack>
                }
              />
            ))}
        </SimpleGrid>
      </VStack>
      {/* <UserSubscriptionModal isOpen={isOpen} onClose={onClose} /> */}
    </>
  )
}
