import React from 'react'
import DocumentUpload from './components/DocumentUpload'
import Navbar from './components/Navbar'


const Main = () => {
  return (
    <div className='w-[95%] mr-auto ml-auto'>
        <Navbar/>
        <DocumentUpload/>
    </div>

  )
}

export default Main