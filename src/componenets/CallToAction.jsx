import React from 'react'

import restaurantFood from '../assets/restauranfood.jpg'

const CallToAction = () => {
  return (
    <header className='flex-lg home-header'>
        <div className='flex-md home-header_info'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat praesentium pariatur deleniti aspernatur quas amet quasi non temporibus tenetur, est iure, nesciunt, quo officiis enim vero facere esse. Voluptas nulla est tempora neque dicta, quibusdam veritatis aspernatur quas explicabo odio doloremque vitae fugiat beatae praesentium et tempore, sapiente sint cupiditate blanditiis similique recusandae, officiis nobis deleniti a. Adipisci, illo, illum optio laudantium eum quidem sit, maiores obcaecati quos necessitatibus quisquam soluta? Sequi tenetur dolor delectus voluptatibus ratione expedita vitae accusamus unde quam numquam assumenda facere blanditiis, atque fugiat autem. Magni aspernatur maxime alias odit adipisci error quos doloremque fugiat dolore?</p>
          <button className="btn btn--primary">Reserve A Table</button>
        </div>
        <img src={restaurantFood} alt="Restaurant Food" />
    </header>
  )
}

export default CallToAction