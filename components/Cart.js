import { FiShoppingCart } from "react-icons/fi"

const Cart = ({ cartItems = [] }) => {
  return (
    <div>
      <button className="btn btn-link text-light btn-sm position-relative ml-3" style={{ fontSize: '1.25rem' }}>
        <FiShoppingCart />
        {
          cartItems && (
            <span className="badge badge-warning position-absolute">{cartItems.length}</span>
          )
        }
      </button>
    </div>
  )
}
export default Cart