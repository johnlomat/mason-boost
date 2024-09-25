import Image from 'next/image'
import React from 'react'

interface IconBoxProp {
  heading: string
  iconSrc: string
  iconWidth: number
  iconHeight: number
}

const IconBox = ({ heading, iconSrc, iconWidth, iconHeight }: IconBoxProp) => {
  return (
    <React.Fragment>
      <div className="space-y-6 text-center">
        <Image
          src={iconSrc}
          alt={heading}
          width={iconWidth}
          height={iconHeight}
          className="mx-auto"
        />
        <div className="heading-5">
          <h3>{heading}</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default IconBox
