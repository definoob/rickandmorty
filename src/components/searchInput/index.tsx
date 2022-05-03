import './styles.css';

interface Props {
  onNameChange: (name: string) => void;
}

const SearchInput = ({onNameChange}: Props) => (
  <input
    className='search-input'
    placeholder='Character name...'
    onChange={(e) => onNameChange(e.target.value)}
  />
);

export default SearchInput;
