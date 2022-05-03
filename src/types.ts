export enum Tab {
  LIST = 'list',
  FAV = 'fav',
}

export enum COLORS {
  Alive = '#97CE4C',
  Dead = '#EF6363',
  unknown = '#BABABA',
}

export interface CharacterInfo {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  location: {
    id: string;
    name: string;
  };
  image: string;
}

export interface Characters {
  characters: {
    results: CharacterInfo[];
  };
}

export interface CharactersByIds {
  charactersByIds: CharacterInfo[];
}

export interface Location {
  id: string;
  name: string;
}

export interface Locations {
  locations: {
    results: Location[];
  };
}
