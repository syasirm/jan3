import React from 'react'

let fistbook={
    img:'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978__340.jpg',
    title:'english'
}
const book = () => {
  return (
    <div>
 <img src={firstbook.img} alt={firstbook.title} />
 <h3>  {firstbook.title}</h3>
    </div>
  )
}

export default book