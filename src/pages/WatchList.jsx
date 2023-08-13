import { useData } from "../context/DataContext"
import MovieCard from '../component/MovieCard'
export default function WatchList(){
  const {filters} = useData()
  return <div>
    WatchList page
    <div className="flex gap-6 flex-wrap justify-center items-center">
      {filters?.watchList.length>0?
        filters?.watchList?.map(item =><MovieCard movie={item} />):
        <p className="text-xl font-mono">No Movie Found</p>
      }
     
    </div>
  
  </div>
}