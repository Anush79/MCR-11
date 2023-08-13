import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function MovieDescription() {
  const { movieId } = useParams();
 
  const {dispatch,isOnWatchList,isOnStarredList,movieData} = useData()
  const movie = movieData.find((item) => item.id == movieId);
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = movie;
  return (
    <div className="h-[90vh] flex flex-col p-3 items-center justify-center w-full" key={id}>
      <h1 className="text-4xl font-bold "> {title}</h1>
      <div className=" grid grid-cols-2 gap-4 items-center justify-around">
        <div className="flex items-end justify-end">
          <img src={imageURL} alt="" className=" h-full w-1/2 object-cover" />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <h2>{title}</h2>
          <p>{summary}</p>
          <p>Year: {year}</p>
          <p>Genre : {genre}</p>
          <p>Director : {director}</p>
          <p>Writer : {writer}</p>
          <p>Cast : {cast.map(item=><span className="font-italics">{item}</span>)}</p>
          <p>Ratings : {rating} ⭐</p>
          <div className="buttons">
          <div className="buttons">
        <button  onClick={()=>{dispatch({type:"STAR", payload: id})}}>{isOnStarredList(id) ?"Starred":"Star"}</button>
        <button onClick={()=>{dispatch({type:"WATCHLIST", payload: id})}}>{isOnWatchList(id)?"Remove from WatchList":"Add to WatchList"}</button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
