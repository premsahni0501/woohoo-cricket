import { useState } from "react"
import Link from "next/link"

const getSlides = () => ["Alcohol/Cigarettes", "Baby Care", "Beverages", "Dairy &amp; Bakery", "Deals TROS", "Fruits &amp; Vegetables", "Home Care", "Ice Cream / Cakes / Shakes / Juices", "Meat/Poultry/Seafoods", "Personal Care", "Restaurant", "Snacks &amp; Branded Foods", "Staples"]

const Categories = () => {
  const [slides] = useState(getSlides)
  return (
    <div className="container py-2 mt-2 categories">
      <ul className="nav justify-content-center">
        {
          slides.map((slide, index) => (
            <li className="nav-item m-1" key={`_slide_${index}`}>
              <Link href="/">
                <span className="btn btn-light">
                  {slide}
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Categories