import React from 'react'
import { icons } from 'react-icons'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ian-aberbach/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ianaberbach" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials