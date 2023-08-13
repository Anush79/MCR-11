import { useState } from "react"
import { useData } from "../context/DataContext";



export default function AddNewMovie() {
  const { AddNewHandler, AllGenres } = useData()
  const [formData, setFormData] = useState({
    id: "8349",
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "genre" || name === "cast") {
      setFormData({ ...formData, [name]: [value] });
      return;
    }

    setFormData({ ...formData, [name]: value })
  }
  const testData = {
    id: "kjdaslkj48923sjdfkj39",
    title: 'Gadar, Ek Prem Katha',
    year: 2001,
    genre: ['Romance', 'Drama'],
    rating: 10,
    director: 'Anil Sharma',
    writer: 'Shaktiman Talwar',
    cast: ['Sunny Deol', 'Amisha Patel'],
    summary:
      'During the Partition of India in 1947, a Sikh truck driver falls in love with a Muslim girl belonging to an aristocratic family.',
    imageURL:"https://m.media-amazon.com/images/M/MV5BYmU3NDBkOWQtN2JjZi00YzIyLTk5NTYtOGYxOTEzOTRjNzJhXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg",
  }
  return <div className="flex flex-col justify-center items-center p-2">
    <h1 className="font-bold text-2xl border-b-2 mb-2 border-black">Add New Movie</h1>
    <form className="w-1/3 flex flex-col  gap-1" onSubmit={(e) => { e.preventDefault(); AddNewHandler(formData) }} >
      <label htmlFor="">
        <input type="text" name="title" placeholder="Enter Movie Name" required onChange={handleChange} value={formData.title} />
      </label>
      <select name="genre" id="genre" onChange={handleChange} value={formData.genre[0]}>
        <option value=""> Select Genre</option>
        {
          AllGenres.map(item => <option value={item}>{item}</option>)
        }
      </select>
      <label htmlFor="">
        <input type="number" min={1900} max={2025} name="year" placeholder="Year" required onChange={handleChange} value={formData.year} />
      </label>
      <label htmlFor="">
        <input type="number" min={1} max={10} name="rating" placeholder="Rating" required onChange={handleChange} value={formData.rating} />
      </label>

      <label htmlFor="">
        <input type="text" name="cast" placeholder="Cast" required onChange={handleChange} value={formData.cast} />
      </label>
      <label htmlFor="">
        <input type="text" name="director" placeholder="Director" required onChange={handleChange} value={formData.director} />
      </label>
      <label htmlFor="">
        <input type="text" name="writer" placeholder="Writer" required onChange={handleChange} value={formData.writer} />
      </label>
      <label htmlFor="">
        <input type="url" name="imageURL" placeholder="imageUrl" required onChange={handleChange} value={formData.imageURL} />
      </label>
      <label htmlFor="">
        <textarea name="summary" id="" cols="30" rows="3" placeholder="Add Movie Summary here" required onChange={handleChange} value={formData.summary}></textarea>
      </label>
      <div className="buttons">
        <button onClick={(e)=>{e.preventDefault();
        setFormData(testData)
        }}>Fill with test data</button>
         <button>Submit Movie</button> 
      </div>
     
    </form>
  </div>
}