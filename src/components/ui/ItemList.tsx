import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BaseProps = {
  heading: string
  description: string
  className?: string
}

type WithIcon = BaseProps & {
  useIcon: true
  iconSrc: string
  bullet?: never
  bulletNoBackground?: never
  iconWidth: number
  iconHeight: number
}
type WithoutIcon = BaseProps & {
  useIcon?: false
  iconSrc?: never
  bullet: string
  bulletNoBackground?: boolean
  iconWidth?: never
  iconHeight?: never
}

type ItemListProp = WithIcon | WithoutIcon

const ItemList = ({
  bullet,
  heading,
  description,
  bulletNoBackground = false,
  useIcon,
  iconSrc,
  iconWidth,
  iconHeight,
  className,
}: ItemListProp) => {
  return (
    <React.Fragment>
      <div
        className={cn(
          'flex flex-col items-center space-x-0 space-y-6 text-center xl:flex-row xl:items-start xl:space-x-10 xl:space-y-0 xl:text-left',
          className,
        )}
      >
        {useIcon ? (
          <Image src={iconSrc} alt={heading} width={iconWidth} height={iconHeight} />
        ) : (
          <div
            className={cn(
              'flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-primary p-[25px] font-semibold text-primary',
              { 'bg-primary text-white': bulletNoBackground === false },
            )}
          >
            {bullet}
          </div>
        )}
        <div className="w-auto space-y-4">
          <div className="heading-5 text-[#353535]">
            <h3>{heading}</h3>
          </div>
          <div className="body-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ItemList
