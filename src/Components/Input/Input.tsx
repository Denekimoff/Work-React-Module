import React from 'react'
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
    onChange?: any
}

export const Input = ({
    label = '',
    type = 'text',
    className = '',
    placeholder = '',
    disabled = false,
    error = false,
    value = '',
    errorText = 'Invalid text',
    onChange = () => {},
}): any => {

    return (
        <fieldset className={`${className}`}>
            <label>{label}
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    value={value}
                />
            </label>
            {error && <span>{errorText}</span>}
        </fieldset>
    )
}
