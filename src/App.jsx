import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <Card
      name='Mario Bros'
      description='Some random text about Mario'
      image="https://mario.nintendo.com/static/d783068682f98d6cfec666c747a27793/d6e64/mario.png" 
    />
    </>
  )
}

export default App
