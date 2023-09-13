import React from 'react'

export default function Footer() {
 
 const year = new Date().getFullYear()
    return (
    <>
    <div className='Footer bg-primary '>
<div className='container'>
    <div className='row'>
        <div className='col'>
            <h5 className='text-center my-2 text-white'>&copy; {year}   All Right Resverd</h5>
        </div>
    </div>
</div>
    </div>
    </>
  )
}
