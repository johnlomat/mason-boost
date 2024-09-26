import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BaseProps = {
  heading: string
  description: string
  className?: string
}

type WithImage = BaseProps & {
  useImage: true
  imageSrc: string
  bullet?: never
  bulletNoBackground?: never
  imageWidth: number
  imageHeight: number
}
type WithoutImage = BaseProps & {
  useImage?: false
  imageSrc?: never
  bullet: string
  bulletNoBackground?: boolean
  imageWidth?: never
  imageHeight?: never
}

type ItemListProp = WithImage | WithoutImage

const ItemList = ({
  bullet,
  heading,
  description,
  bulletNoBackground = false,
  useImage,
  imageSrc,
  imageWidth,
  imageHeight,
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
        {useImage ? (
          <Image src={imageSrc} alt={heading} width={imageWidth} height={imageHeight} />
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
        <div className="space-y-4">
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
