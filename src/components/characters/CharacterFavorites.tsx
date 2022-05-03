import {useQuery} from '@apollo/client';

import CharacterItem from './CharacterItem';
import Loader from '../../components/loader';
import {GET_CHARACTERS_BY_ID} from '../../queries';

import {CharactersByIds, CharacterInfo} from '../../types';
import './styles.css';

interface Props {
  ids: string[];
  unlike: (name: string) => void;
}

const CharacterFavorites = ({ids, unlike}: Props) => {
  const {loading, error, data} = useQuery<CharactersByIds>(
    GET_CHARACTERS_BY_ID,
    {variables: {ids}}
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p className='error-text'>No favorites selected!</p>;
  }

  return (
    <>
      {data?.charactersByIds.map((item: CharacterInfo) => (
        <CharacterItem key={item.id} data={item} onClick={unlike} />
      ))}
    </>
  );
};

export default CharacterFavorites;
