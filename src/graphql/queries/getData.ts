import { gql } from 'graphql-request'

export const GET_PORTFOLIO = gql`
  query GET_PORTFOLIO {
    portfolioWebsite {
      data {
        attributes {
          sectionHome {
            regards
            photo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
