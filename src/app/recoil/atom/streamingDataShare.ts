import { atom } from 'recoil';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface Data {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export const dataShare = atom<Data>({
  key: 'dataShare', // unique ID (with respect to other atoms/selectors)
  default: { Search: [], totalResults: '', Response: '' },
});