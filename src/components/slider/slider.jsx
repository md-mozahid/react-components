import { useState } from 'react'
import img01 from '../../assets/img-icon/about01.png'
import img02 from '../../assets/img-icon/about02.png'
import img03 from '../../assets/img-icon/about03.png'
import './slider.css'

import { FcNext, FcPrevious } from 'react-icons/fc'

const sliderList = [
  {
    imgUrl: img01,
    name: 'Client Name01',
    title: 'Mobile Application Development.01',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgUrl: img02,
    name: 'Client Name02',
    title: 'Mobile Application Development.02',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgUrl: img03,
    name: 'Client Name03',
    title: 'Mobile Application Development.03',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (item) => {
    setCurrentIndex(item)
  }

  return (
    <div className="flex justify-center mt-16">
      <div className="carousel-slider">
        {sliderList.length && (
          <>
            <div className="slider">
              <img
                className=""
                src={sliderList[currentIndex].imgUrl}
                alt={sliderList[currentIndex].name}
              />
              <div className="separator"></div>
              <div className="slider-info">
                <h2>{sliderList[currentIndex].title}</h2>
                <h3>{sliderList[currentIndex].name}</h3>
                <p>{sliderList[currentIndex].desc}</p>
              </div>
            </div>
          </>
        )}

        <div className="prev-next">
          <span
            onClick={() =>
              handleClick(
                currentIndex === 0 ? sliderList.length - 1 : currentIndex - 1
              )
            }>
            <FcPrevious />
          </span>
          <span
            onClick={() =>
              handleClick(
                currentIndex === sliderList.length - 1 ? 0 : currentIndex + 1
              )
            }>
            <FcNext />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Slider
