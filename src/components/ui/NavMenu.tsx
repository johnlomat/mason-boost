import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Cross1Icon } from '@radix-ui/react-icons'

const NavMenu = ({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) => {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = () => {
    if (isClient && window.innerWidth < 768) {
      toggleMenu() // Close the menu on mobile screens
    }
  }

  return (
    <React.Fragment>
      <div
        className={cn(
          'absolute right-4 top-4 z-20 hidden w-[90%] max-w-[18.75rem] md:relative md:right-0 md:top-0 md:block md:w-auto md:max-w-full',
          { block: isMenuOpen },
        )}
      >
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 focus:outline-none md:hidden"
        >
          <Cross1Icon width={25} height={25} />
        </button>
        <nav className="font-semibold">
          <ul className="font-montserrat flex-col items-center space-x-0 space-y-4 rounded-lg bg-white p-6 text-[#353535] shadow-lg md:flex md:flex-row md:space-x-12 md:space-y-0 md:rounded-none md:bg-transparent md:p-0 md:shadow-none lg:space-x-12 2xl:space-x-20">
            <li>
              <Link
                href="/"
                className={cn('hover:text-primary', {
                  'text-primary': pathname === '/',
                })}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary" onClick={handleClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary" onClick={handleClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default NavMenu
