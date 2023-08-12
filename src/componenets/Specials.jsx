import React from 'react'
import greekSalad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemmonDessert from '../assets/lemon dessert.jpg'
import Special from './Special'

const Specials = () => {
  const specials = [
    {
      dishImage: greekSalad,
      title: 'Greek Salad',
      price: '$12.99',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio itaque. Nobis quas ratione at iure odit corrupti laborum sint.'
    },
    {
      dishImage: bruchetta,
      title: 'Bruchetta',
      price: '$12.99',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio itaque. Nobis quas ratione at iure odit corrupti laborum sint.'
    },
    {
      dishImage: lemmonDessert,
      title: 'Lemon Dessert',
      price: '$12.99',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio itaque. Nobis quas ratione at iure odit corrupti laborum sint.'
    }
  ]
  return (
    <div className='home-specials'>
      <div className="flex-lg home-special_info">
        <h1 className='display-64px'>This week's specials</h1>
        <button className="btn btn--primary">Online Menu</button>
      </div>
      <div className="flex-lg">
        { specials.map(special => (
          <Special special={special} key={crypto.randomUUID()} />
        )) }
      </div>
    </div>
  )
}

export default Specials