import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header className='header'>
    <Link prefetch href='/'><a>Home</a></Link>
    <Link prefetch href='/diary'><a>Diary</a></Link>
  </header>
)

export default Header
