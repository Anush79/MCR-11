
import { useData } from "../context/DataContext"
import MovieCard from '../component/MovieCard'
export default function Starred() {
  const { filters } = useData()
  return <div>
    Starredpage
    {
      filters.starred.map(item => <MovieCard movie={item} />)
    }
  </div>
}