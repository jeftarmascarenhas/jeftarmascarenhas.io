import fetch from 'isomorphic-unfetch'

import VideosScreen from '@global-modules/videos/screen/main'
import { Videos as VideosTypes } from '@global-entities/vidoes'
import { NextSeo } from 'next-seo'

export async function getStaticProps() {
  try {
    const BASE_URL = process.env.BASE_URL || `https://www.jeftar.com.br/api`
    const res = await fetch(`${BASE_URL}/youtube/videos`, {
      method: 'GET'
    })

    if (!res.ok) {
      return {
        props: {
          channelVideos: {}
        }
      }
    }

    const channelVideos = await res.json()

    return {
      props: {
        channelVideos
      }
    }
  } catch (error) {
    return {
      props: {
        channelVideos: {}
      }
    }
  }
}

export default function Videos({
  channelVideos
}: {
  channelVideos: VideosTypes
}) {
  return (
    <>
      <NextSeo
        title="Home | Jeftar Mascarenhas"
        description="Plataforma de cursos e treinamentos Blockchain, Front-end, React e muito Javascript. Sempre estudando e compartilhando conteúdo com novas tecnologias"
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/generic-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Site E Blog'
            }
          ]
        }}
      />
      <VideosScreen channelVideos={channelVideos} />
    </>
  )
}
