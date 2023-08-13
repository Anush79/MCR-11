import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { movies } from "../data/data";
import { toast } from "react-toastify";

export const DataContext = createContext();
const initialValue = {
  year: 0,
  search:"",
  rating: "",
  genre: "",
  watchList: [],
  starred: [],
};
const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH": 
      return {...state, search:payload};
    case "YEAR":
      return { ...state, year: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "GENRE":
      return { ...state, genre: payload };
    case "WATCHLIST": {
      console.log(payload);
      return {
        ...state,
        watchList: state.watchList.find((item) => item.id == payload)
          ? [...state.watchList.filter((item) => item.id != payload)]
          : [movies.find((item) => item.id == payload), ...state.watchList],
      };
    }
    case "STAR":
      return {
        ...state,
        starred: state.starred.find((item) => item.id == payload)
          ? [...state.starred.filter((item) => item.id != payload)]
          : [movies.find((item) => item.id == payload), ...state.starred],
      };

    default:
      return state
  }
};
export function DataProvider({ children }) {
  const [filters, dispatch] = useReducer(
    reducerFunction,
    JSON.parse(localStorage.getItem("filters")) || initialValue
  );
  const [movieData, setMovieData] = useState(
    JSON.parse(localStorage.getItem("movieData")) || movies
  );
  const AllGenres = extractUniqueGenres(movieData);

  const AddNewHandler = (newMovie) => {
    setMovieData([newMovie, ...movieData]);
  };

  function extractUniqueGenres(movies) {
    const uniqueGenres = new Set();
    for (const movie of movies) {
      movie?.genre?.forEach((genre) => uniqueGenres.add(genre));
    }
    return Array.from(uniqueGenres);
  }
 
  const searchFiltered =  filters.search.length > 0
  ? movieData.filter((item) => item.title.toLowerCase().includes(filters.search.toLowerCase().trim()))
  : movieData;

  const genreFiltered =
    filters.genre.length > 0
      ? searchFiltered.filter((item) => item.genre.includes(filters.genre))
      : searchFiltered;

  const ratingFiltered =
    filters.rating > 0
      ? genreFiltered.filter((item) => item.rating == filters.rating)
      : genreFiltered;
  
      const yearFilteredData  = filters.year>0 ?
       ratingFiltered.filter(item=> item.year == filters.year) : ratingFiltered;

console.log({filters}, {yearFilteredData})
  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(movieData));
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [movieData, filters]);
  return (
    <DataContext.Provider
      value={{ movieData, AllGenres, dispatch,yearFilteredData, filters, AddNewHandler }}
    >
      {children}
    </DataContext.Provider>
  );
}
export const useData = () => useContext(DataContext);
