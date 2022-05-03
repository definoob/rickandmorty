import {gql} from '@apollo/client';

export const GET_LOCATIONS = gql`
  query getLocations {
    locations {
      results {
        id
        name
      }
    }
  }
`;

export const GET_CHARACTERS_BY_NAME = gql`
  query getCharactersByName($name: String!) {
    characters(filter: {name: $name}) {
      results {
        id
        name
        status
        location {
          id
          name
        }
        image
      }
    }
  }
`;

export const GET_CHARACTERS_BY_ID = gql`
  query getCharactersByIDs($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      location {
        id
        name
      }
      image
    }
  }
`;
