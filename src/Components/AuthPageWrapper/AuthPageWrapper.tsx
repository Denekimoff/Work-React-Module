import React, {type PropsWithChildren} from 'react'

import './AuthPageWrapper.scss'

type AuthPageWrapperProps = PropsWithChildren<{
  title?: string
  theme?: string
  children?: React.ReactNode
  button?: React.ReactNode
}>

export const AuthPageWrapper = ({ button, children, title, theme }: AuthPageWrapperProps) => {
    return (
        <div className={`auth-page-wrapper--${theme}`}>
            <div className='wrapper'>
                {button}
                <h1 className='auth-page-wrapper__title'>{title}</h1>
                {children}
            </div>
        </div>
    )
}
