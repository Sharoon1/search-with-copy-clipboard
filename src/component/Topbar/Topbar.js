import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

export default function Topbar() {
  const [date,setDate] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
        setDate(dayjs().format(' YYYY-MMMM -DD / hh:mm:ss	'))
    })
  })

    return (
    <>
    <div className='Topbar bg-info'>
        <div className='container '>
            <div className='row'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <h4 className='my-2 text-white '>{date}</h4>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
