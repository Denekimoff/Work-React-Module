import { useState } from 'react'
import './Input.scss'

export interface InputProps {
    label?: string
    type?: string
    className?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    error?: boolean
    errorText?: string
}

export const Input = ({
    label = 'Text',
    type = 'text',
    className = '',
    placeholder = '',
    disabled = false,
    required = true,
    error = false,
    errorText = 'Invalid text',
}): any => {
    const [value, setValue] = useState('')
    const handleChange = (event: { target: { value: any } }) => {
        const { value } = event.target
        setValue(value)
    }
    const id : any = +new Date()
    return (

        <fieldset className={`${className}`}>
            <label>{label}
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </label>
            {error && <span>{errorText}</span>}
        </fieldset>
    )
}
