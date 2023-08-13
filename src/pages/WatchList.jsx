import { useData } from "../context/DataContext"
import MovieCard from '../component/MovieCard'
export default function WatchList(){
  const {filters} = useData()
  return <div>
    WatchList page
    {
      filters.watchList.map(item=>  <MovieCard movie={item} />)
    }
  </div>
}