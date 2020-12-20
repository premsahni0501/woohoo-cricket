import 'glider-js/glider.min.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Glider, { slide } from 'glider-js'

const getSlides = () => ["Alcohol/Cigarettes", "Baby Care", "Beverages", "Dairy & Bakery", "Deals TROS", "Fruits & Vegetables", "Home Care", "Ice Cream / Cakes / Shakes / Juices", "Meat/Poultry/Seafoods", "Personal Care", "Restaurant", "Snacks & Branded Foods", "Staples"]
const Slider = () => {
  const [slides] = useState(getSlides)
  const [gliderInstance, setGliderInstance] = useState(() => null)
  const gliderRef = useRef()
  const gliderPrev = useRef()
  const gliderNext = useRef()

  useEffect(() => {
    if (gliderRef.current) {
      const gliderInstance = new Glider(gliderRef.current, {
        draggable: true,
        slidesToShow: 'auto',
        slidesToScroll: 3,
        itemWidth: 150,
        rewind: true,
        arrows: {
          next: gliderNext.current,
          prev: gliderPrev.current
        }
      })
      setGliderInstance(gliderInstance)
    }
  }, [gliderRef, gliderNext, gliderPrev])

  useEffect(() => {
    if (!gliderInstance) {
      return
    }
    setTimeout(() => {
      gliderInstance.scrollItem(slides.length / 2)
      setTimeout(() => {
        gliderInstance.scrollItem(0)
      }, 1000)
    }, 1000)
  }, [gliderInstance])

  return (
    <ul className="nav nav-pills w-100 slider position-relative">
      <button className="btn btn-light btn-sm glider-prev position-static" ref={gliderPrev}>
        <FiArrowLeft />
      </button>
      <div className="glider-contain">
        <div ref={gliderRef} className="glider">
          {
            slides.map((slide, index) => (
              <li className="nav-item" key={`_slide_${index}`}>
                <Link href="/">
                  <div className="btn btn-light d-flex slider-btn">
                    <Image src="/vercel.svg" width={32} height={32} objectFit="cover" />
                    <span className="item-label">{slide}</span>
                  </div>
                </Link>
              </li>
            ))
          }
        </div>
      </div>
      <button className="btn btn-light btn-sm glider-next position-static" ref={gliderNext}>
        <FiArrowRight />
      </button>
    </ul>
  )
}
export default Slider