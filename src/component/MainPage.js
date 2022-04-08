import React from 'react'
import {Link} from "react-router-dom"

function MainPage() {
  return (
    <div>

        <h1>Start Shopping</h1>

        <Link to='/homepage'>    
        <button type="button" className="btn btn-success"  >Start</button>
        </Link>
    </div>
  )
}

export default MainPage