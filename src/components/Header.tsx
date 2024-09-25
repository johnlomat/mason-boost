'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import NavMenu from './ui/NavMenu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Assuming md breakpoint is 768px (adjust as per your Tailwind CSS config)
        setIsMenuOpen(false) // Close the menu if screen size is md or larger
        document.body.style.overflow = 'unset' // Restore body scroll
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    if (isMenuOpen) {
      // Body scroll lock
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <React.Fragment>
      <header className="w-full bg-white py-8">
        <div className="container flex w-full max-w-[1530px] items-center justify-between md:w-[95%]">
          <div>
            <Image
              src="/images/Mason-Boost-Logo.svg"
              alt="Mason Boost Logo"
              width={204}
              height={30}
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
              aria-label="Toggle navigation"
            >
              <HamburgerMenuIcon width={25} height={25} />
            </button>
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
              onClick={toggleMenu}
            ></div>
          )}

          <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
