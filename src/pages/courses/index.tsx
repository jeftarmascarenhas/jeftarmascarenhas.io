import CourseScreen from 'modules/courses/screens/main'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

export default function Course() {
  return (
    <>
      <NextSeo
        title="Cursos | Jeftar Mascarenhas"
        description="Cursos para desenvolvimento Blockchain, Front-end, React e JavaScript. Com Prática e direto ao ponto para você passar nas entrevistas e desafios."
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/courses-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Site E Cursos Blockchain, Front-end e JavaScript'
            }
          ]
        }}
      />
      <CourseScreen />
    </>
  )
}
