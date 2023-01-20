import MaxContent from '@global-components/max-content'
import DefaultContainer from '@global-components/default-container'
import { getAllPosts } from '@global-libs/api'
import { NextSeo } from 'next-seo'

// export async function getStaticProps() {
//   const posts = getAllPosts
//   return {
//     props: {
//       posts
//     }
//   }
// }

export default function BlogScreen(props: any) {
  console.log(`getStaticProps111`, props)
  return (
    <>
      <NextSeo
        title="Blog | Jeftar Mascarenhas"
        description="Nesse blog escreve tudo que estou fazendo e interessado como blockchain, web3, desenvolvimento web e mobile."
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/generic-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Blog sobre tecnologia web2 e web3'
            }
          ]
        }}
      />

      <DefaultContainer>
        <MaxContent>
          <div>Blog</div>
        </MaxContent>
      </DefaultContainer>
    </>
  )
}
