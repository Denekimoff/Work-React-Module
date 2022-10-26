import React from 'react'

import './App.css';
import {Button} from './Components/Button/Button.jsx'
import {IconUp}  from './Components/Icon/IconUp.jsx';
import {IconDown}  from './Components/Icon/IconDown.jsx';
import {IconMark} from './Components/Icon/IconMark';

function App () {
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
          <Button disabled className='btn btn-with-icon' icon={<IconMark/>} children='Button with Icon'/>
          <Button disabled className='btn' icon={<IconUp/>}/>
          <Button disabled className='btn' icon={<IconDown/>}/>
        </div>
      </div>
    </div>
  )
}

export default App
