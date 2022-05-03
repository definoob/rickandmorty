import {Tab} from '../../types';
import './styles.css';

interface Props {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const TabComponent = ({activeTab, setActiveTab}: Props) => {
  const generateClassName = (tab: Tab) =>
    'tab-title ' + (tab === activeTab ? 'tab-active' : 'tab-inactive');

  return (
    <div className='tab-container'>
      <p
        className={generateClassName(Tab.LIST)}
        onClick={() => setActiveTab(Tab.LIST)}
      >
        List
      </p>
      <p
        className={generateClassName(Tab.FAV)}
        onClick={() => setActiveTab(Tab.FAV)}
      >
        Favorites
      </p>
    </div>
  );
};

export default TabComponent;
