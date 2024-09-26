import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TestimonialAuthorProp {
  profilePic: string
  name: string
  position: string
  className?: string
}

const TestimonialAuthor = ({ profilePic, name, position, className }: TestimonialAuthorProp) => {
  return (
    <React.Fragment>
      <div className={cn('flex space-x-6 space-y-0', className)}>
        <Image src={profilePic} alt={name} width={75} height={75} />
        <div className="flex flex-col justify-center">
          <div className="text-[13px] font-semibold uppercase text-primary">
            <h3>{name}</h3>
          </div>
          <div className="body-text text-[12px] font-medium uppercase">{position}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TestimonialAuthor
