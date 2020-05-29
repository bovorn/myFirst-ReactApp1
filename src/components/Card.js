import React from 'react'

function Card({ name, email, id }) {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    )
}
 
export default Card;
 