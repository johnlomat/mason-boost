import React from 'react'
import Image from 'next/image'

interface HoverCardProp {
  src: string
  alt: string
}

const HoverCard = ({ src, alt }: HoverCardProp) => {
  return (
    <React.Fragment>
      <div className="group relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#1F232CA1] transition duration-300 ease-in-out group-hover:bg-[#964B00C4]"></div>
        <Image src={src} alt={alt} width={464} height={610} />
      </div>
    </React.Fragment>
  )
}

export default HoverCard
