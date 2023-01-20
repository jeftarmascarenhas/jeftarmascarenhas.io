import HomeScreen from '@home/screens/main'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | Jeftar Mascarenhas"
        description="Site e Blog, cursos e treinamentos Blockchain, Front-end, React e muito Javascript. Sempre estudando e compartilhando conteúdo com novas tecnologias"
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/generic-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Site, Cursos, Treinamento e Blog'
            }
          ]
        }}
      />
      <HomeScreen />
    </>
  )
}
