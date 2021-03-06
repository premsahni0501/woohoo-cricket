const { useState, useRef, useEffect } = require("react")
const { FiChevronDown } = require("react-icons/fi")

const Dropdown = ({ children, toggle, align, buttonText, iconComponent, toggleBtnClass }) => {
  const [state, setToggle] = useState(toggle)
  const ref = useRef()
  useEffect(() => {
    const hideDropdown = e => {
      const { currentTarget } = e
      if (state && currentTarget && (currentTarget !== ref.current && !ref.current.contains(currentTarget))) {
        setToggle(false)
      }
    }
    document.body.addEventListener('click', hideDropdown)
    return () => document.body.removeEventListener('click', hideDropdown)
  }, [state])

  return (
    <div className="input-group-append dropdown" ref={ref}>
      <button className={`btn btn-light dropdown-toggle${iconComponent ? ' with-icon' : ''}${toggleBtnClass || ''}`} type="button"
        onClick={() => setToggle(!state)}>
        {iconComponent}
        {buttonText}
        <FiChevronDown style={{
          transform: `rotate(${state ? 180 : 0}deg)`,
          transition: 'transform 0.5s ease'
        }} />
      </button>
      <div className={`dropdown-menu ${align || 'dropdown-menu-right'} ${state ? ' show' : ''}`}>
        {children}
      </div>
    </div>
  )
}
export default Dropdown
