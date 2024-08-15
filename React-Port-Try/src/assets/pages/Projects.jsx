import React from 'react'
import "./Projects.css"
import project1 from "../../../public/images.jpg"
import { Link } from 'react-router-dom'
import project2 from "../../../public/images2.jpg"
import project3 from "../../../public/flix.png"
import project4 from "../../../public/mern.jpg"
import project5 from "../../../public/images3.png"

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className="projects-title">
        <h2>Top 4 Projects</h2>
      </div>
      <div className="projects-area">

      
      <div className="projects">
        <Link to={"https://github.com/ayhan219/YouTube-Clone-with-React"}><img className='img' src={project1} alt="" /></Link>
        <h3>Youtube Clone App React</h3>
      </div>
      <div className="projects">
        <Link to={"https://github.com/ayhan219/React-Food-Delivery-Application"}><img className='img' src={project2} alt="" /></Link>
        <h3>Food Delivery application React</h3>
      </div>
      <div className="projects">
        <Link to={"https://github.com/ayhan219/Flixx-app"}><img className='img' src={project3} alt="" /></Link>
        <h3>Flix App JS</h3>
      </div>
      <div className="projects">
        <Link to={"https://github.com/ayhan219/Full-Stack-MERN-Book-Application"}><img className='img' src={project4} alt="" /></Link>
        <h3>MERN Book Store Application</h3>
      </div>
      
      </div>

    </div>
  )
}

export default Projects