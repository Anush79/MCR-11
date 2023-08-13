import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";
export default function MCard({ movie }) {
  const {dispatch} = useData()
  const { id, title, imageURL, summary } = movie;

  return (
    <div key={id} className="w-[310px] h-auto flex flex-col justify-between text-left">
        <NavLink to={`/movie/${id}`}>
        <div >
       
          <img src={imageURL} alt="" className="w-full h-[350px] object-cover " />
      </div>
       </NavLink>
      <div className="flex flex-col justify-between">
        <NavLink to={`/movie/${id}`}>
           <h1 className=" text-2xl font-bold ">{title}</h1>
        <p>{summary}</p>
        </NavLink>
       

    

      <div className="buttons">
        <button  onClick={()=>{dispatch({type:"STAR", payload: id})}}>Star</button>
        <button onClick={()=>{dispatch({type:"WATCHLIST", payload: id})}}>Add to WatchList</button>
      </div>
    </div>
    </div >
  );
}

/**
 *   {
    id: 1,
    title: 'Redemption',
    year: 1994,
    genre: ['Drama'],
    rating: 9,
    director: 'Frank Darabont',
    writer: 'Stephen King',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    summary:
      'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
    imageURL:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
  }
 */
