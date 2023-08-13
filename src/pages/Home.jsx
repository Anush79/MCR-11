import { NavLink } from "react-router-dom";
import MCard from "../component/MovieCard"
import { useData } from "../context/DataContext"

export default function Home() {
  const { yearFilteredData, AllGenres, filters, dispatch } = useData();

  const getOptionsforYears = (start) => {
    const optionsList = []
    while (start <= 2023) {
      optionsList.push(start)
      start++;
    }
    return optionsList
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.name.toUpperCase(), payload: e.target.value })
  }

  return <div className="flex flex-col">
    <div className="flex items-center justify-between pl-5 ">
      <h1 className="text-2xl font-bold">Movies</h1>
      <div className="flex w-1/2 justify-between p-4">
        <select name="genre" id="genre" onChange={onChangeHandler} value={filters.genre}>
          <option value=""> Select Genre</option>
          {
            AllGenres.map(item => <option value={item}>{item}</option>)
          }
        </select>
        <select name="year" id="year" onChange={onChangeHandler} value={filters.year}>
          <option value=""> Release Year</option>
          {
            getOptionsforYears(1990).map(item => <option value={item}>{item}</option>)
          }
        </select>
        <select name="rating" id="rating" onChange={onChangeHandler} value={filters.rating}>
          <option value={0}> Select rating</option>
          {
            Array.from({ length: 10 }, (_, index) => index + 1).map(item => <option value={item}>{item}</option>)
          }
        </select>
        <NavLink to='/newmovie'>
          <button >Add a Movie</button>
        </NavLink>

      </div>
    </div>
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {yearFilteredData.length > 0 ?
        yearFilteredData.map(item => <MCard movie={item} />) :
        <p className="text-xl font-mono">No Movie Found</p>
      }

    </div>

  </div>

}