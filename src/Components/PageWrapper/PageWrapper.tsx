import React, {type PropsWithChildren} from 'react'

import './PageWrapper.scss'

type PageWrapperProps = PropsWithChildren<{
  title?: string
  theme?: string
  children?: React.ReactNode
  button?: React.ReactNode
}>

export const PageWrapper = ({ button, children, title, theme }: PageWrapperProps) => {
    return (
        <div className={`page-wrapper page-wrapper--${theme}`}>
            <div className='wrapper'>
                {button}
                <h1 className='page-wrapper__title'>{title}</h1>
                {children}
            </div>
        </div>
    )
}
