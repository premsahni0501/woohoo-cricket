import { useState } from "react"

const Login = () => {
  const [state, setState] = useState(false)
  return (
    <div>
      <button className="btn btn-light" onClick={() => setState(true)}>Login/Sign up</button>
      <div className={`modal-backdrop${state ? ' fade show' : ' fade d-none'}`}></div>
      <div className={`modal d-block login-modal${state ? ' fade show' : ' fade'}`} onClick={() => setState(false)}>
        <div className="modal-dialog">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Login</h3>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="modal-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login