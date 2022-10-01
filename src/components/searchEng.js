import React from 'react'
import { Container, Row, Col } from "react-bootstrap"; 
import { ProjectCard } from "./ProjectCard";
import 'app.css' 

export default function searchEng() {

    


  const style = {
    // center the search-barre inside the parent div
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <div className="search-engine">
      <div className='conainer'>

        <div  
          className='search-barre'
          style={style} 
        >
          <label for="search">Explore</label>
          <input type='text' placeholder='Search' />
          <button type='submit' 
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            
          }} 
           >Search</button>
        </div>

        <div className='search-result'>

        </div>

      </div>
      
    </div>
  )
}


