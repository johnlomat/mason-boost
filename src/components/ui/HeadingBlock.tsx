import React from 'react'
import { cn } from '@/lib/utils'

interface HeadingBlockProp {
  subheading: string
  heading: string
  className?: string
  children?: React.ReactNode
}

const HeadingBlock = ({ subheading, heading, className, children }: HeadingBlockProp) => {
  return (
    <React.Fragment>
      <div className="space-y-8">
        <div className={cn('space-y-6 text-center xl:text-left', className)}>
          <span className="sub-heading text-secondary">{subheading}</span>
          <div className="heading-2 text-[#353535]">
            <h2>{heading}</h2>
          </div>
        </div>
        {children && <div className="body-text">{children}</div>}
      </div>
    </React.Fragment>
  )
}

export default HeadingBlock
