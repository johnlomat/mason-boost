import React from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const subheadingVariants = cva('sub-heading', {
  variants: {
    subheadingColor: {
      default: 'text-secondary',
      white: 'text-white',
    },
  },
  defaultVariants: {
    subheadingColor: 'default',
  },
})

const headingVariants = cva('heading-2', {
  variants: {
    headingColor: {
      default: 'text-[#353535]',
      white: 'text-white',
    },
  },
  defaultVariants: {
    headingColor: 'default',
  },
})

interface HeadingBlockProp {
  subheading: string
  heading: string
  className?: string
  children?: React.ReactNode
  subheadingColor?: 'default' | 'white'
  headingColor?: 'default' | 'white'
}

const HeadingBlock = ({
  subheading,
  heading,
  className,
  children,
  subheadingColor = 'default', // Default value
  headingColor = 'default', // Default value
}: HeadingBlockProp) => {
  return (
    <React.Fragment>
      <div className="space-y-8">
        <div className={cn('space-y-6 text-center xl:text-left', className)}>
          <span className={cn(subheadingVariants({ subheadingColor }))}>{subheading}</span>
          <div className={cn(headingVariants({ headingColor }))}>
            <h2>{heading}</h2>
          </div>
        </div>
        {children && <div className="body-text">{children}</div>}
      </div>
    </React.Fragment>
  )
}

export default HeadingBlock
