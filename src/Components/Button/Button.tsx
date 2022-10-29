import { ButtonHTMLAttributes, ReactElement } from 'react' // { useState }
import './Button.scss'

export interface ButtonProps {
    type?: string
    className?: string
    disabled?: boolean
    // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    icon?: ReactElement
    children?: string
}

export const Button = ({
    type = 'button',
    className = 'btn',
    disabled = false,
    // onClick,
    icon,
    children,
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    // const [count, setCount] = useState(1)
    // const onClick = () => setCount(count + 1)
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            // onClick={onClick}
        >
            {icon}
            {children}
            {/* {count} */}
        </button>
    )
}
