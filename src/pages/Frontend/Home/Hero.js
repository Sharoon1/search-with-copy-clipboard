import { Button, Input } from 'antd'
import data from '../../../Emojies.json'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
export default function Hero() {
  const [search, setSearch] = useState('')
  const [code, setCode] = useState('')
 // eslint-disable-next-line
  const [copy, setCopy] = useState(false)
  const seeEmoji =()=>{
    window.notify('Now see the input field to copy code','info')
  }
  const toastalert = (e) => {
    e.preventDefault()
    window.notify('successfully copied', 'success')
  }
  const src = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <>
      <div className='Hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <form className='d-md-flex flex-direaction-columon justify-content-center align-items-center'>
              <div className='col d-flex'>

                <Input width={20} type='search' placeholder='search' onChange={src} className='form-control d-sm-flex mt-0 mt-4 w-25' value={search} name='search' />
                <Button type='primary' classNames='' size='large' className='mt-4 me-5 mx-2'>Search</Button>
              </div>

              <div className='col d-flex'>
                <input type='text' value={code} placeholder='Click to the emojie' className=' form-control mt-4 w-25' />
                <CopyToClipboard text={code}
                  onCopy={() => { setCopy(true) }} >
                  <button className='btn btn-danger mt-4' onClick={toastalert}>copy the Emojie</button>
                </CopyToClipboard>
                    </div>  
              
              
              </form>
              <div>

              </div>
              <div className='mt-5 animation' >
                {

                  data.filter((item) => {
                    //  console.log(fullName)
                    const searchitem = search.toLowerCase();
                    const fullName = item.name.toLowerCase();
                    return searchitem === '' ? item : fullName.startsWith(searchitem)
                    // return  searchitem === ''? item :searchitem && fullName.startsWith(searchitem) && fullName !== searchitem; 
                  }).slice(0,181)
                    .map((item) => (

                      <span className='mt-4' onDoubleClick={seeEmoji} onClick={() => { setCode(item.html) }} style={{ fontSize: '30px' }}> {item.emoji} </span>
                    ))
                }



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
