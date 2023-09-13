import { Button } from 'antd'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function About() {
const [value,setValue] = useState('')
const [copy,setCopy] = useState(false)
console.log(value)
console.log('copy', copy)
return (
    <>
    <input type='text'  placeholder='copy text' onChange={(e)=>{setValue(e.target.value) }} />
  <CopyToClipboard text={value}
  onCopy={()=>{setCopy(true)}}>

  <Button>copy</Button>
  </CopyToClipboard>
    </>
  )
}
