
import { useData } from "../context/DataContext"
import MovieCard from '../component/MovieCard'
export default function Starred() {
  const { filters } = useData()
  return <div>
    Starredpage
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {filters.starred.length>0?
        filters.starred.map(item =><MovieCard movie={item} />):
        <p className="text-xl font-mono">No Movie Found</p>
      }
     
    </div>
  </div>
}