import { NavLink } from "react-router-dom";
import MCard from "../component/MovieCard"
import { useData } from "../context/DataContext"

export default function Home() {
  const { movieData, AllGenres } = useData();
 
  const getOptionsforYears = (start) => {
    const optionsList = []
    while (start <= 2023) {
      optionsList.push(start)
      start++;
    }
    return optionsList
  }

  return <div className="flex flex-col">
    <div className="flex items-center justify-between pl-5 ">
      <h1 className="text-2xl font-bold">Movies</h1>
      <div className="flex w-1/2 justify-between p-4">
        <select name="genre" id="genre">
          <option value="select"> Select Genre</option>
          {
            AllGenres.map(item => <option value={item}>{item}</option>)
          }
        </select>
        <select name="year" id="year">
          <option value="select"> Release Year</option>
          {
            getOptionsforYears(1990).map(item=> <option value={item}>{item}</option>)
          }
        </select>
        <select name="rating" id="rating">
          <option value="rating"> Select rating</option>
          {
            Array.from({ length: 10 }, (_, index) => index + 1).map(item=> <option value={item}>{item}</option>)
          }
        </select>
        <NavLink to='/newmovie'>
        <button >Add a Movie</button>
        </NavLink>
  
      </div>
    </div>
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {
        movieData.map(item => <MCard movie={item} />)
      }
     
    </div>

  </div>

}