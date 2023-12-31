import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function Header() {
  const { dispatch, filters } = useData()
  return (
    <div className="flex gap-4 w-full items-center justify-between p-4 bg-slate-800">
      <h1 className="text-2xl text-white font-mono flex items-center">IMDB</h1>
      <div></div>
      <input className="w-1/4 border-2 p-2 rounded-md" type="text" placeholder="Search movies by title, caste or director" onChange={(e) => { dispatch({ type: "SEARCH", payload: e.target.value }) }} />
      <nav className="flex w-1/4 justify-between text-slate-400 items-center  ">
        <NavLink to='/'>Movies</NavLink>
        <NavLink to='/watchlist'>WatchList {filters.watchList.length > 0 ? "("+filters.watchList.length+")" : ""}</NavLink>
        <NavLink to='/starred'>Starred Movies {filters.starred.length > 0 ? "("+filters.starred.length+")" : ""}</NavLink>
      </nav>
    </div>
  )
}