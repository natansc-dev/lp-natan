import { Main } from '../components/Main'

import { GetStaticProps } from 'next'
import { client } from '../graphql/client'
import { GET_PORTFOLIO } from 'graphql/queries/getData'

type HomeProps = {
  data: {
    regards: string
    photo: {
      url: string
    }
  }
}

export default function Home({ data }: HomeProps) {
  return <Main photo_url={data.photo.url} regards={data.regards} />
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.request(GET_PORTFOLIO)

  const data = {
    regards: response.portfolioWebsite.data.attributes.sectionHome.regards,
    photo:
      response.portfolioWebsite.data.attributes.sectionHome.photo.data
        .attributes
  }

  return {
    props: {
      data
    }
  }
}
