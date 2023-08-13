import { useState } from "react"
import { useData } from "../context/DataContext";



export default function AddNewMovie(){
  const {AddNewHandler,AllGenres} = useData()
 const [formData, setFormData] = useState({
  id:"8349",
  title:"",
  year:"",
  genre:[],
  rating:"",
  director:"",
  writer:"",
  cast:"",
  summary:"",
  imageURL:""
 })
  const handleChange =(e)=>{
const {name, value}= e.target;
if(name==="genre"){
  setFormData({...formData, [name]:[value]});
  return;
}

setFormData({...formData, [name]:value})
  }
  // {
  //   id: 2,
  //   title: 'The Godfather',
  //   year: 1992,
  //   genre: ['Crime', 'Drama'],
  //   rating: 9,
  //   director: 'Francis Ford Coppola',
  //   writer: 'Mario Puzo',
  //   cast: ['Marlon Brando', 'Al Pacino'],
  //   summary:
  //     'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  //   imageURL:
  //     'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
  // },
  return <div>
    <form className="w-full flex flex-col" onSubmit={(e)=>{e.preventDefault(); AddNewHandler(formData)}} >
      <label htmlFor="">
        <input type="text" name="title" placeholder="Enter Movie Name" required onChange={handleChange} value={formData.name}/>
      </label>
      <select name="genre" id="genre" onChange={handleChange}>
          <option value=""> Select Genre</option>
          {
            AllGenres.map(item => <option value={item}>{item}</option>)
          }
        </select>
      <label htmlFor="">
        <input type="number" min={1900} max={2025} name="year" placeholder="Year" required  onChange={handleChange} value={formData.year}/>
      </label>
      <label htmlFor="">
        <input type="number" min={1} max={10} name="rating" placeholder="Rating" required  onChange={handleChange} value={formData.rating}/>
      </label>
    
      <label htmlFor="">
        <input type="text" name="cast" placeholder="Cast" required onChange={handleChange} value={formData.cast}/>
      </label>
      <label htmlFor="">
        <input type="text" name="director" placeholder="Director" required onChange={handleChange} value={formData.director}/>
      </label>
      <label htmlFor="">
        <input type="text" name="writer" placeholder="Writer" required onChange={handleChange} value={formData.writer}/>
      </label>
      <label htmlFor="">
        <input type="url" name="imageURL" placeholder="imageUrl" required onChange={handleChange} value={formData.imageURL}/>
      </label>
      <label htmlFor="">
        <textarea name="summary" id="" cols="30" rows="3" placeholder="Add Movie Summary here" required onChange={handleChange} value={formData.summary}></textarea>
      </label>
      <button>Submit Movie</button>
    </form>
  </div>
}