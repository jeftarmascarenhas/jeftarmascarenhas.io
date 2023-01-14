import WorkJournalScreen from '@global-modules/work-journal/screens/main'
import { NextSeo } from 'next-seo'

export default function WorkJournal() {
  return (
    <div>
      <NextSeo
        title="Diário de Trabalho | Jeftar Mascarenhas"
        description="Coisas que estou trabalhando e estudando. Atualizado toda semana."
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/generic-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Site, Diário de trabalho'
            }
          ]
        }}
      />

      <WorkJournalScreen />
    </div>
  )
}
