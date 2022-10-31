/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import './App.scss'
import {Button} from './Components/Button/Button'
import {IconUp}  from './Components/Icon/IconUp'
import {IconDown}  from './Components/Icon/IconDown'
import {IconMark} from './Components/Icon/IconMark'
import {Input} from './Components/Input/Input'
import {Card} from './Components/Card/Card'

function App () {
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 4) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div className='App'>
            <div className='wrapper'>
                <div className='row'>
                    <Button className='btn primary' children='Primary'/>
                    <Button className='btn secondary' children='Secondary'/>
                    <Button className='btn secondary-two' children='Secondary 2'/>
                    <Button className='btn btn-with-icon' icon={<IconMark className='icon-mark'/>}
                        children='Button with Icon'/>
                    <Button className='btn btn-icon-up' icon={<IconUp className='icon-up'/>}/>
                    <Button className='btn btn-icon-down' icon={<IconDown className='icon-down'/>}/>
                </div>
                <div className='row'>
                    <Button disabled className='btn primary' children='Primary'/>
                    <Button disabled className='btn' children='Secondary'/>
                    <Button disabled className='btn secondary-two' children='Secondary 2'/>
                    <Button disabled className='btn btn-with-icon' icon={
                        <IconMark className='icon-mark'/>
                    } children='Button with Icon'/>
                    <Button disabled className='btn' icon={<IconUp className='icon-up'/>}/>
                    <Button disabled className='btn' icon={<IconDown className='icon-down'/>}/>
                </div>
                <div className='row'>
                    <form className='form' onSubmit={onSubmit}>
                        <h3>Form Element</h3>
                        <Input className='input-text' label='Firth name' placeholder='Firth Name'/>
                        <Input className='input-text' label='Last name' placeholder='Last Name'/>
                        <Input className='input-text' label='E-mail' placeholder='E-mail' type='email'/>
                        <Input className='input-text' label='Password' type='password' placeholder='Password'/>
                        <Input disabled className='input-text' label='Confirm' type='password' placeholder='Password'/>
                        <div className='submit'>
                            <Button className='btn-submit' type='submit' children='Submit'/>
                        </div>
                    </form>
                </div>
                <div className='cards-list'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default App
