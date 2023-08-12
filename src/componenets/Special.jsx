import React from 'react'

const Special = ({ special }) => {
  const { dishImage, title, price, content } = special
  return (
    <div className='special'>
      <header>
        <img src={dishImage} alt="" />
      </header>
      <main>
        <div className="flex-lg">
          <b>{title}</b>
          <b className="special-price">{price}</b>
        </div>
        <p>{content}</p>
      </main>
      <footer>
        Order a delivery @
      </footer>
    </div>
  )
}

export default Special