import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container ">
    <Link to='/' className="navbar-brand text-white">Emojie Code</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active text-white" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link text-white">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
         <button className="btn btn-info text-white" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
