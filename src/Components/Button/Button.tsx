import { ButtonHTMLAttributes, ReactElement } from 'react' // { useState }
import './Button.scss'

export interface ButtonProps {
    type?: string
    className?: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    icon?: ReactElement
    children?: any
    link?: string
    count?: any
}

export const Button = ({
    type = 'button',
    className = 'btn',
    disabled = false,
    onClick,
    icon,
    children,
    link,
    count,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {

    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {link}
            {icon}
            {count}
            {children}
        </button>
    )
}
