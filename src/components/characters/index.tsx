import {useState} from 'react';

import CharacterList from './CharacterList';
import CharacterFavorites from './CharacterFavorites';

import {Tab} from '../../types';
import './styles.css';

interface Props {
  name: string;
  location: string;
  activeTab: Tab;
}

const Characters = ({name, location, activeTab}: Props) => {
  const [favIds, setFavIds] = useState<string[]>([]);

  const onLike = (id: string) => setFavIds((prev) => [...prev, id]);
  const onUnlike = (id: string) =>
    setFavIds((prev) => prev.filter((el) => el !== id));

  return (
    <div className='characters-container'>
      {activeTab === Tab.LIST ? (
        <CharacterList
          name={name}
          location={location}
          ids={favIds}
          like={onLike}
        />
      ) : (
        <CharacterFavorites ids={favIds} unlike={onUnlike} />
      )}
    </div>
  );
};

export default Characters;
