import {useQuery} from '@apollo/client';

import Loader from '../loader';
import CharacterItem from './CharacterItem';
import {GET_CHARACTERS_BY_NAME} from '../../queries';
import {CharacterInfo, Characters} from '../../types';
import './styles.css';

interface Props {
  name: string;
  location: string;
  ids: string[];
  like: (character: string) => void;
}

const CharacterList = ({name, location, ids, like}: Props) => {
  const {loading, error, data} = useQuery<Characters>(GET_CHARACTERS_BY_NAME, {
    variables: {name},
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p className='error-text'>No character!</p>;
  }

  const filteredResult: CharacterInfo[] = (() => {
    if (!data) {
      return [];
    }
    let temp = [...data.characters.results];
    if (location && location !== 'all') {
      temp = temp.filter((item) => item.location.name === location);
    }
    if (ids.length > 0) {
      temp = temp.filter((item) => !ids.includes(item.id));
    }

    return temp;
  })();

  return (
    <>
      {filteredResult.length > 0 ? (
        filteredResult.map((item) => (
          <CharacterItem key={item.id} data={item} onClick={like} />
        ))
      ) : (
        <p className='error-text'>Nothing to display!</p>
      )}
    </>
  );
};

export default CharacterList;
