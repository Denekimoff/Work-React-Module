import React from 'react'

import './Button.css'

export const Button = ({ icon, children, onClick, className, disabled }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {icon}{children}
    </button>
  )
}
