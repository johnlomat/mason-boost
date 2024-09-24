import React from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import HoverCard from '@/components/ui/HoverCard'

export default function Home() {
  return (
    <React.Fragment>
      <section className="flex h-auto min-h-[480px] w-full items-center justify-center bg-[url('/images/section-background-1.jpg')] bg-cover bg-center bg-no-repeat md:min-h-[530px] xl:h-[calc(100vh-94px)] xl:min-h-[700px]">
        <div className="container">
          <div className="mx-auto max-w-[720px] xl:max-w-[960px]">
            <div className="heading-1 mb-7 text-center text-white">
              <h1>Transform Your Online Presence with a Stunning, Modern Website</h1>
            </div>
            <div className="mx-auto mb-6 max-w-[800px] text-center text-white">
              <p>
                At Mason Boost, we specialize in creating fast, responsive, and visually stunning
                websites designed to grow your business.
              </p>
            </div>
            <div className="text-center">
              <Button asChild className="max-[360px]:text-[14px]">
                <Link href="#">Get Your Free Consultation Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="container md:w-[95%]">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 text-center md:grid-cols-2 md:gap-[5%] md:text-left">
            <div className="heading-2">
              <h2>
                <span className="text-[#353535]">About </span>
                <span className="bg-gradient-text-primary block bg-clip-text text-transparent">
                  Mason Boost LTD
                </span>
              </h2>
            </div>
            <div className="space-y-4">
              <div className="heading-4 text-secondary">
                <h3>Who We Are</h3>
              </div>
              <div className="text-[#939598]">
                <p>
                  We&rsquo;re a web design agency dedicated to building beautiful, user-optimized
                  websites that help businesses thrive online. Whether you&apos;re a small business
                  or an established brand, we&rsquo;ll create a website that reflects your vision
                  and drives results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <div className="container pb-16 md:w-[95%]">
          <div className="mx-auto max-w-[620px] space-y-4 text-center">
            <span className="text-secondary sub-heading">why choose us</span>
            <div className="heading-2 text-[#353535]">
              <h2>Why Choose Mason Boost for Your Website?</h2>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4">
            <HoverCard src="/images/Modern-Clean-Designs-image.jpg" alt="Modern, Clean, Designs" />
            <HoverCard src="/images/Mobile-Friendly-image.jpeg" alt="Mobile-Friendly" />
            <HoverCard src="/images/SEO-Optimized-image.jpg" alt="SEO Optimized" />
            <HoverCard
              src="/images/Tailored-to-Your-Business-image.jpg"
              alt="Tailored to Your Business"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
