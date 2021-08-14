import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import { setCourses } from '../features/coursesSlice';
import "../main.css";

const AddCourse = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [by, setBy] = useState("")
  const [rating, setRating] = useState("")

  const addCourse = e => {
    e.preventDefault()
    if (name !== "" && 
        desc !== "" && 
        price !== 0 && 
        by !== "" && 
        rating !== "" )
        {dispatch(
        setCourses({
          id:uuidv4(),
          name:name,
          description: desc,
          price: price,
          by: by,
          rating: rating,
        })
      )
      history.push("/")
    }else {
      alert("Enter proper values into the fields.")
    }
  }
  return (
    <div className="add__course">
      <input type="text" placeholder="Name of the course" value={name} onChange={(e) => setName(e.target.value)}/> 
      <input type="text" placeholder="Course Description" value={desc} onChange={(e) => setDesc(e.target.value)}/> 
      <input type="text" placeholder="$$$ Price of the course" value={price} onChange={(e) => setPrice(e.target.value)}/> 
      <input type="text" placeholder="Course creation" value={by} onChange={(e) => setBy(e.target.value)}/> 
      <input type="text" placeholder="Course rating (out of 5)" value={rating} onChange={(e) => setRating(e.target.value)}/> 
      <button onClick={e => addCourse(e)}>Add Course</button>
    </div>
  )
}

export default AddCourse
