import { gql } from 'graphql-request'

export const GET_PORTFOLIO = gql`
  query GET_PORTFOLIO {
    portfolio {
      data {
        attributes {
          teste
        }
      }
    }
  }
`
