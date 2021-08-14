import React from 'react'
import { useSelector } from 'react-redux'
import { selectCourses } from './features/coursesSlice'
import { BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Course from './Components/Course';
import IndCourse from './Components/IndCourse';
import AddCourse from './Components/AddCourse';
import './main.css'


const App = () => {
  const courses = useSelector(selectCourses)

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>A place to sell your courses online</h1>
          <Link to="/addcourse" className="header__button">
            Sell a Course
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/" exact>
          <div className="courses">
           {courses && courses.map(course => (
             <Link className="link" to={`/${course.id}`}>
               <Course data={course}/>
             </Link>
           ))}
          </div>
        </Route>
        <Route path="/addcourse">
          <AddCourse />
        </Route>
        <Route path="/:id">
          <IndCourse />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
