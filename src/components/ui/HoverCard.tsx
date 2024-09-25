import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

interface HoverCardProp {
  backgroundImage: string
  heading: string
  description: string
  icon: string
  iconWidth: number
  iconHeight: number
  ctaLink: string
}

const HoverCard = ({
  backgroundImage,
  heading,
  description,
  icon,
  iconWidth,
  iconHeight,
  ctaLink,
}: HoverCardProp) => {
  return (
    <React.Fragment>
      <div className="group relative col-span-12 text-center md:col-span-6 xl:col-span-3 xl:text-left">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-[#1F232CA1] transition duration-300 ease-in-out group-hover:bg-[#964B00C4]"></div>
        <Image src={backgroundImage} alt={heading} width={464} height={610} className="w-full" />
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full text-white">
          <div className="my-auto flex min-h-0 w-full p-10 xl:min-h-[400px]">
            <div className="flex w-full flex-col justify-between space-y-8">
              <div className="space-y-6 text-[27px] font-semibold leading-tight">
                <Image
                  src={icon}
                  alt={heading}
                  width={iconWidth}
                  height={iconHeight}
                  className="mx-auto xl:mx-0"
                />
                <h3>{heading}</h3>
              </div>
              <div className="hidden space-y-8 opacity-0 transition duration-300 ease-in-out group-hover:block group-hover:opacity-100 xl:block">
                <p>{description}</p>
                <Button asChild variant="link" size="none" className="text-white">
                  <Link href={ctaLink}>Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HoverCard
