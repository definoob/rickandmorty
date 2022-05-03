import {CharacterInfo, COLORS} from '../../types';
import './styles.css';

interface Props {
  data: CharacterInfo;
  onClick: (name: string) => void;
}

const CharacterItem = ({data, onClick}: Props) => (
  <div className='item-container' onClick={() => onClick(data.id)}>
    <img
      className='item-image'
      style={{borderColor: COLORS[data.status]}}
      src={data.image}
      alt={data.name}
    />
    <div className='item-text-container'>
      <p className='item-name'>{data.name}</p>
      <p className='item-status' style={{color: COLORS[data.status]}}>
        {data.status}
      </p>
    </div>
  </div>
);

export default CharacterItem;
