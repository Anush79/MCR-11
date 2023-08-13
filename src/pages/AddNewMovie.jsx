


export default function AddNewMovie(){
  return <div>
    <form className="w-full flex flex-col" >
      <label htmlFor="">
        <input type="text" name="Movie Name" placeholder="Enter Movie Name" required/>
      </label>
      <label htmlFor="">
        <input type="number" min={1900} max={2025} name="Movie Name" placeholder="Year" required />
      </label>
      <label htmlFor="">
        <input type="text" name="genre" placeholder="Genre" required/>
      </label>
      <label htmlFor="">
        <input type="text" name="Cast" placeholder="Cast" required/>
      </label>
      <label htmlFor="">
        <input type="text" name="Director" placeholder="Director" required/>
      </label>
      <label htmlFor="">
        <input type="text" name="Writer" placeholder="Writer" required/>
      </label>
      <label htmlFor="">
        <input type="url" name="imageUrl" placeholder="imageUrl" required/>
      </label>
      <label htmlFor="">
        <textarea name="summary" id="" cols="30" rows="3" placeholder="Add Movie Summary here"></textarea>
      </label>
      <button>Submit Movie</button>
    </form>
  </div>
}