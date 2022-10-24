import { Main } from '../components/Main'

import { GetStaticProps } from 'next'
import { client } from '../graphql/client'
import { GET_PORTFOLIO } from 'graphql/queries/getData'

export default function Home() {
  return <Main />
}

export const getStaticProps: GetStaticProps = async () => {
  await client.request(GET_PORTFOLIO)

  return {
    props: {}
  }
}
