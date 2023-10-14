import React from 'react'
import greekSalad from '../assets/images/greek salad.jpg'
import bruchetta from '../assets/images/bruchetta.svg'
import lemmonDessert from '../assets/images/lemon dessert.jpg'
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
    <div className='specials pl-3 pr-3'>
      <div className="specials__info mb-3">
        <h1 className='display-64'>This week's specials</h1>
        <button className="btn-yellow text-dark-gray">Online Menu</button>
      </div>
      <div className="row gap-1">
        { specials.map(special => (
          <Special special={special} key={crypto.randomUUID()} />
        )) }
      </div>
    </div>
  )
}

export default Specials