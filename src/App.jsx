import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {
  const jackRef = useRef(null)
  const cockRef = useRef(null)
  const[cockMoveX, setCockMoveX] = useState(0)
  const[cockMoveY, setCockMoveY] = useState(0)

  const[jackMoveX, setjackMoveX] = useState(0)
  const[jackMoveY, setjackMoveY] = useState(0)
  const jackmoving = (e) => {
    setjackMoveX(e.clientX)
    setjackMoveY(e.clientY)
}
const cockroachesCaught = (e)=>{
  const randomX = Math.floor(Math.random()*1500)
  const randomY = Math.floor(Math.random()*700)
  setCockMoveX(randomX)
  setCockMoveY(randomY)
}
useGSAP(() => {
gsap.to(cockRef.current, {
  x: cockMoveX,
  y: cockMoveY,
  duration: 1,
  ease: "back"
})
gsap.to(jackRef.current,{
  x: jackMoveX,
  y: jackMoveY,
  duration: 1,
  ease: "back"
})
}, [jackMoveX,jackMoveY,cockMoveX,cockMoveY])
  return (
   <div className='main' onMouseMove={(e) =>{
jackmoving(e)
   }}>
   <img className='jack' ref={jackRef} src="https://i.pinimg.com/originals/10/f9/89/10f9899b508ef9402c0335eb10a5dc48.png" alt="" />
  <img className='cock' onClick={cockroachesCaught} ref={cockRef} src="/src/assets/Coch.png" alt="" />
   </div>
  )
}

export default App
