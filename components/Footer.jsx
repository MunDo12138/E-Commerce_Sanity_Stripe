import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2023 Tommy Li All rights reserved</p>
      <p className='icons'>
        <Link href='https://www.linkedin.com/in/hungleongli/'>
          <AiFillLinkedin />
        </Link>
        <Link href='https://github.com/MunDo12138'>
          <AiFillGithub />
        </Link>

      </p>
    </div>
  )
}

export default Footer