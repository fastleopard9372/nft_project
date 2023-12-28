"use client";
import React, { useState, MouseEvent } from 'react'
// import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel'
import classNames from 'classnames';
import Style_item from '@/components/Style_item';
import Card1 from '@/components/Card1';
import types from '@/types'
import Description from '@/components/Description';

import '@/styles/globals.css';
const items = [
  { id: 1, url: '/product_data/image (1).png' },
  { id: 2, url: '/product_data/image (2).png' },
  { id: 3, url: '/product_data/image (5).png' },
  { id: 4, url: '/product_data/image (4).png' },
  { id: 5, url: '/product_data/image (2).png' }
]
const card1_data: types.Card1_data[] = [{
  _id: "1",
  background: "/card1/back1.png",
  like: 25,
  time: "129 : 12: 32 : 34",
  title: "TrapMonkie 3D",
  avatar: [
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" }],
  name: "Fuliani",
  value: 76.4
}, {
  _id: "1",
  background: "/card1/back2.png",
  like: 25,
  time: "129 : 12: 32 : 34",
  title: "TrapMonkie 3D",
  avatar: [
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" }],
  name: "Fuliani",
  value: 76.4
}, {
  _id: "1",
  background: "/card1/back3.png",
  like: 25,
  time: "129 : 12: 32 : 34",
  title: "TrapMonkie 3D",
  avatar: [
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" }],
  name: "Fuliani",
  value: 76.4
}, {
  _id: "1",
  background: "/card1/back1.png",
  like: 25,
  time: "129 : 12: 32 : 34",
  title: "TrapMonkie 3D",
  avatar: [
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" }],
  name: "Fuliani",
  value: 76.4
}, {
  _id: "1",
  background: "/card1/back2.png",
  like: 25,
  time: "129 : 12: 32 : 34",
  title: "TrapMonkie 3D",
  avatar: [
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" }],
  name: "Fuliani",
  value: 76.4
}, {
  _id: "1",
  background: "/card1/back3.png",
  like: 25,
  time: "129 : 12: 32 : 34",
  title: "TrapMonkie 3D",
  avatar: [
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" },
    { _id: "1", path: "/card1/woman.png" }],
  name: "Fuliani",
  value: 76.4
}]

const Product_page = () => {
  var carousel: any = null;
  const item_config = {
    itemsToScroll: 1,
    itemsToShow: 4,
    showArrows: false,
    pagination: false,
    verticalMode: true,
    isRTL: false,
    ref: carousel
  }
  // ref = { ref => { carousel = ref; return carousel; }}
  const [viewBtn, setViewBtn] = useState<string>('all');

  const handleViewClick = (name: string) => {
    setViewBtn(name);
  }
  return (
    <div className='section pb-20' style={{ fontFamily: 'Josefin Sans' }}>
      <div className='card'>
        <div className='card-body'>
          <div className=' pt-10 grid grid-cols-2 gap-5 pb-14'>
            <button type='button' className='btn btn-primary btn-sm top-0.5 col-span-2 w-32'>Back to home</button>
            <div className="grid grid-cols-12 gap-5 py-3 col-span-2">
              <div className='col-span-2 relative'>
                <button type='button' onClick={() => carousel.slidePrev()}
                  className='btn btn-sm w-9 absolute z-50 top-3.5 left-1' style={{ padding: '0 !important', opacity: 0.8 }}>
                  <img src='/product_data/arrow-up.svg'></img>
                </button>
                {/* <Carousel {...item_config}>
                  {items.map((item, index) =>
                    <Style_item key={index}>
                      <img src={item.url} className='w-full h-full' />
                    </Style_item>
                  )}
                </Carousel> */}
                <button type='button'
                  onClick={() => carousel.slideNext()}
                  className='btn btn-sm w-9 absolute bottom-3.5 left-1 z-50' style={{ padding: '0 !important', opacity: 0.8 }}>
                  <img src='/product_data/arrow-down.svg'></img>
                </button>
              </div>
              <div className='col-span-10 pt-1 gap-5'>
                <div className='grid grid-cols-5 gap-5'>
                  <div className='col-span-2'>
                    <img src='/product_data/image (3).png' className='w-full' />
                  </div>
                  <div className='col-span-3 font-medium'>
                    <div className='text-5xl pb-4'>Creative ProductName</div>
                    <div className='text-2xl flex space-x-2  pb-4 opacity-50'>
                      <span>Code: </span>
                      <span>#51512322223221215</span>
                    </div>
                    <div className='text-lg flex items-center space-x-3'>
                      <div className="rating">
                        <input type="radio" name="rating-1" readOnly className="mask mask-star bg-primary" />
                        <input type="radio" name="rating-1" readOnly className="mask mask-star bg-primary" />
                        <input type="radio" name="rating-1" readOnly className="mask mask-star bg-primary" />
                        <input type="radio" name="rating-1" readOnly className="mask mask-star bg-primary" checked />
                        <input type="radio" name="rating-1" readOnly className="mask mask-star bg-primary" />
                      </div>
                      <span className='opacity-50'>332 Review</span>
                      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      <span className='text-primary'> Write a Review </span>
                      <div className='flex-grow cursor-pointer hover:opacity-80'>
                        <img src='/product_data/upload.svg' />
                      </div>
                    </div>
                    <div className='flex space-x-2 text-[40px] pt-8'>
                      <span className='text-primary'>8.4590</span>
                      <span className='opacity-50'> ETH/ $5479.88</span>
                    </div>
                    <div className='py-3'>
                      <button type='button' className='btn btn-neutral opacity-90  text-xl text-primary'>Special Offer On Soecial Category</button>
                    </div>
                    <div className='flex justify-start space-x-7 py-3'>
                      <img className='m-0' src='/product_data/unsplash_wzRKn-AjKf4.png' />
                      <img src='/product_data/unsplash_wzRKn-AjKf4 (1).png' />
                      <img src='/product_data/unsplash_wzRKn-AjKf4 (2).png' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between items-start space-y-2 p-10 pb-0'>
                  <div className='flex space-x-3 text-xl'>
                    <span className='opacity-50'>AVAILABILITY : </span>
                    <span>In Stock</span>
                  </div>
                  <div className="divider"></div>
                  <span className='opacity-50'>QUANTITY</span>
                  <div className='flex justify-start items-center space-x-7'>
                    <input type='number' max={200} min={1} step={1} className='input input-bordered input-sm w-14' />
                    <span>8.4590</span>
                    <span className='opacity-50'> ETH/ $5479.88</span>
                  </div>
                  <button type='button' className='btn btn-primary py-4'>ADD TO CART</button>
                  <div className='flex justify-start items-center space-x-5 py-4'>
                    <button type='button' className='btn btn-outline btn-primary btn-lg'>
                      <img src='/product_data/like.svg'></img>
                      <span className='text-[20px] font-normal'>Add To Wallet</span>
                    </button>
                    <button type='button' className='btn btn-outline  btn-primary btn-lg'>
                      <img src='/product_data/home.svg'></img>
                      <span className='text-[20px] font-normal'>Add To Category</span>
                    </button>
                  </div>
                  <div className='grow flex flex-start items-center space-x-3'>
                    <p className='opacity-50'>SHARE</p>
                    <button type='button' className='btn  btn-success btn-sm flex '>
                      <img src='/product_data/function.svg'></img>
                      <span>Facebook</span>
                    </button>
                    <button type='button' className='btn btn-light btn-sm' style={{ backgroundColor: '#EEEEEE !important', color: '#000000' }}>
                      <img src='/product_data/twitter.svg'></img>
                      <span>Twitter</span>
                    </button>
                    <button type='button' className='btn   btn-success  btn-sm'>
                      <img src='/product_data/function.svg'></img>
                      <span>Like</span>
                    </button>
                    <button type='button' className='btn btn-primary btn-sm'>
                      <img src='/product_data/mail.svg'></img>
                      <span>Gmail</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1'>
              <Description />
            </div>
          </div>
          <div className='grid grid-cols-1 '>
            <div className='flex justify-between items-center space-x-3  pr-2'>
              <div>
                <p className='text-lg'>Exclusive Assets</p>
                <p className='text-primary text-5xl'>Explore</p>
              </div>
              <div className='grow'></div>
              <button type='button' className={classNames('btn btn-primary btn-sm', { 'btn-outline': 'all' !== viewBtn })} onClick={() => handleViewClick('all')}>All NFTs</button>
              <button type='button' className={classNames('btn btn-primary btn-sm', { 'btn-outline': 'art' !== viewBtn })} onClick={() => handleViewClick('art')}>Art</button>
              <button type='button' className={classNames('btn btn-primary btn-sm', { 'btn-outline': 'collect' !== viewBtn })} onClick={() => handleViewClick('collect')}>Collectibles</button>
              <button type='button' className={classNames('btn btn-primary btn-sm', { 'btn-outline': 'virtual' !== viewBtn })} onClick={() => handleViewClick('virtual')}>Virtual Worlds</button>
              <button type='button' className={classNames('btn btn-primary btn-sm', { 'btn-outline': 'trading' !== viewBtn })} onClick={() => handleViewClick('trading')}>Tranding Cards</button>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {card1_data.map((value, item) => (
              <Card1 {...value} />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Product_page
