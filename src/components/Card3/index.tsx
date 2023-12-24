import React from 'react'
import types from '@/types'
import '@/styles/card3.css';

const Card3 = (data: types.Card3_data) => {
  return (
    <div className='card3'>
      <div className='card-container'>
        <div className="card-body">
          <div className='card-img'>
            <a href={data.link}><img src={data.url}></img></a>
          </div>
        </div>
        <div className="card-info">
          <a href={data.link}><p className='card-title'>{data.title}</p></a>
          <p className='card-content'>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card3