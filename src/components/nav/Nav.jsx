import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { AiOutlineExperiment } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#portfolio"><AiOutlineExperiment /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav