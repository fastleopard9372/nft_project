import React from 'react'
import types from '../types';
import '../styles/card1.css';
const Card1 = (data:types.Card1_data) => {

  return (
    <div className='card1'>
      <div className='card-container'>
        <div className="card-body">
          <div className='card-img'>
            <img src={data.background}></img>
            <div className='card-like flex justify-center'>
              <h3 className='mr-2'>{ data.like}</h3>
              <img src='/card1/like.svg' />
            </div>
            <div className='card-time'>
              <p>
                {data.time}
              </p>
            </div>
          </div>
        </div>
        <div className="card-info">
          <h3 className='card-title'>{ data.title}</h3>
          <div className='card-follow flex justify-start items-center'>
            <div className='card-avatar-group'>
              {
                
                data.avatar.filter((value, index)=>(index<5)).map((v, i) => {
                  return (
                    <img src={v.path} key={i} style={{ left: `${- 12 * i}px` } }/>
                  )
                })

              }
            </div>
            <h3 className='card-follow-count ml-5'>{ data.avatar.length>20?"20+":data.avatar.length} People Place Bit</h3>
          </div>
          <div className='card-user flex justify-between mt-3 mb-3'>
            <p className='card-username'>Owned By { data.name}</p>
            <div className='card-mark flex'>
              <img src='/card1/Group.svg'></img>
              <h3>{ data.value}ETH</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className='card-action flex justify-between mt-3'>
          <h3 className='card-history'>View History</h3>
          <div className='card-button'>
            <div className='button'>
              <img src="/card1/vector.svg" />
              <p className='pt-1 pl-2'>Place Bid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1