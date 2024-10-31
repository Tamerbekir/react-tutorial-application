// import Button from "react-bootstrap/Button"
import React from "react"

interface Props {
  children: string
  color: string
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const Button = ({children, onClick, color, onMouseEnter, onMouseLeave}: Props) => {
  return (
    <>
    <div>
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={'btn btn-' + color}
        onClick={onClick}>{children}
      </button>
    </div>
      </>
  )
}

export default Button