import React from 'react'
import types from '@/types'
import '@/styles/card2.css';
const Card2 = (data: types.Card2_data) => {
  return (
    <div className='m-2'>
      <div className='card2'>
        <div className='card-container'>
          <div className="card-body">
            <div className='card-img'>
              <img src={data.background}></img>
            </div>
          </div>
          <div className="card-info">
            <img className='card-avatar' src={data.avatar}></img>
            <p className='card-username'>{data.name}</p>
            <div className='card-by space-x-2'>
              <span className='by'>by</span>
              <span className='by-2'>{data.by}</span>
            </div>
            <p className='card-content mt-4'>
              {data.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2