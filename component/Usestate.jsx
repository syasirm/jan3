import React from 'react'
import { useState } from 'react'
import './style.css'


const Usestate = () => {
function changename(){
if (name==='yasir'){
  setName('Mehdi')
}else{
  setName('yasir')
}
}
    const[name ,setName] =useState('yasir')

  return (
    <div className='main'> 
     <div className='show'>

     <h2>{name}</h2>
      <button className='btn' onClick={changename}>Change</button>
     </div>
       
    </div>
  )
}

export default Usestate