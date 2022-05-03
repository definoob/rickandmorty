import {useQuery} from '@apollo/client';
import {GET_LOCATIONS} from '../../queries';
import {Location, Locations} from '../../types';
import arrowDown from '../../assets/images/arrowDown.png';
import './styles.css';

interface Props {
  onLocationChange: (id: string) => void;
}

const Dropdown = ({onLocationChange}: Props) => {
  const {loading, error, data} = useQuery<Locations>(GET_LOCATIONS);

  if (loading) {
    return (
      <div className='dropdown-container'>
        <select className='dropdown'>
          <option label='All Locations' value='all' />
        </select>
        <img src={arrowDown} alt='arrowDown' />
      </div>
    );
  }

  if (error) {
    return <h2>No locations.</h2>;
  }

  return (
    <div className='dropdown-container'>
      <select
        className='dropdown'
        onChange={(e) => onLocationChange(e.target.value)}
      >
        <option label='All Locations' value='all' />
        {data?.locations.results.map((location: Location) => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
      <img src={arrowDown} alt='arrowDown' className='dropdown-image' />
    </div>
  );
};

export default Dropdown;
