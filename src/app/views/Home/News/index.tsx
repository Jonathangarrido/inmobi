import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ima1 from '~assets/img/home/1.jpg'
import ima2 from '~assets/img/home/2.jpg'
import ima3 from '~assets/img/home/3.jpg'

import * as Style from './style'

export const News = () => {

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const banners = [
    ima1,
    ima2,
    ima3
  ]

  return (
    <Style.News>
      <Slider {...settings}>
        {
          banners.map((items:string, index:number)=>(
            <Style.Items key={index}>
              <img src={items} alt={`banner ${index + 1}`}/>
            </Style.Items>
          ))
        }
      </Slider>
    </Style.News>
  )
}
