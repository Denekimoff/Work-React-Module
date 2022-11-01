import React from 'react'

import { Card } from '../Card/Card'
import './Blog.scss'

export const Blog = () => {
    return (
        <div className='wrapper'>
            <div className='blog__body'>
                <div className='main-content'>
                    <Card className='bg'/>
                    <Card className='md'/>
                    <Card className='md'/>
                    <Card className='md'/>
                    <Card className='md'/>
                </div>
                <div className='feat-content'>
                    <Card className='sm'/>
                    <Card className='sm'/>
                    <Card className='sm'/>
                    <Card className='sm'/>
                    <Card className='sm'/>
                    <Card className='sm'/>
                </div>
            </div>
        </div>
    )
}
