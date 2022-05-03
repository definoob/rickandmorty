import {useState} from 'react';

import Header from './components/header';
import SearchInput from './components/searchInput';
import Dropdown from './components/dropDown';
import TabComponent from './components/tabs';
import Characters from './components/characters';
import useDebounce from './hooks/useDebounce';

import {Tab} from './types';
import './App.css';

const App = () => {
  const [name, setName] = useState<string>('');
  const debouncedName = useDebounce<string>(name, 500);
  const [location, setLocation] = useState<string>('');
  const [activeTab, setActiveTab] = useState<Tab>(Tab.LIST);

  return (
    <div className='app-container'>
      <Header />
      <SearchInput onNameChange={setName} />
      <Dropdown onLocationChange={setLocation} />
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      <Characters
        name={debouncedName}
        location={location}
        activeTab={activeTab}
      />
    </div>
  );
};

export default App;
