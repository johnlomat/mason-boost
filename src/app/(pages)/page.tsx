import React from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import HoverCard from '@/components/ui/HoverCard'
import ItemList from '@/components/ui/ItemList'
import HeadingBlock from '@/components/ui/HeadingBlock'
import IconBox from '@/components/ui/IconBox'

export default function Home() {
  return (
    <React.Fragment>
      <section className="flex h-auto min-h-0 w-full items-center justify-center bg-[url('/images/section-background-1.jpg')] bg-cover bg-center bg-no-repeat py-16 md:min-h-[530px] xl:h-[calc(100vh-94px)] xl:min-h-[700px] xl:py-0">
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
          <div className="grid grid-cols-12 gap-6 text-center md:gap-[5%] md:text-left">
            <div className="heading-2 col-span-12 md:col-span-6">
              <h2>
                <span className="text-[#353535]">About </span>
                <span className="block bg-gradient-text-primary bg-clip-text text-transparent">
                  Mason Boost LTD
                </span>
              </h2>
            </div>
            <div className="col-span-12 space-y-6 md:col-span-6">
              <div className="heading-4 text-secondary">
                <h3>Who We Are</h3>
              </div>
              <div className="body-text">
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

      <section className="bg-white pt-16">
        <div className="container pb-16 md:w-[95%]">
          <div className="mx-auto max-w-[620px]">
            <HeadingBlock
              subheading="why choose us"
              heading="Why Choose Mason Boost for Your Website?"
              className="xl:text-center"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-12">
            <HoverCard
              backgroundImage="/images/Modern-Clean-Designs-image.jpg"
              heading="Modern, Clean, Designs"
              description="Every website we build is fully responsive, ensuring a seamless experience on all devices."
              icon="/images/twinkle-star-Icon.svg"
              iconWidth={42}
              iconHeight={42}
              ctaLink="#"
            />
            <HoverCard
              backgroundImage="/images/Mobile-Friendly-image.jpeg"
              heading="Mobile-Friendly"
              description="Every website we build is fully responsive, ensuring a seamless experience on all devices."
              icon="/images/mobile-Icon.svg"
              iconWidth={33}
              iconHeight={42}
              ctaLink="#"
            />
            <HoverCard
              backgroundImage="/images/SEO-Optimized-image.jpg"
              heading="SEO Optimized"
              description="Every website we build is fully responsive, ensuring a seamless experience on all devices."
              icon="/images/tune-Icon.svg"
              iconWidth={38}
              iconHeight={38}
              ctaLink="#"
            />
            <HoverCard
              backgroundImage="/images/Tailored-to-Your-Business-image.jpg"
              heading="Tailored to Your Business"
              description="Every website we build is fully responsive, ensuring a seamless experience on all devices."
              icon="/images/diagonal-arrow-Icon.svg"
              iconWidth={29}
              iconHeight={29}
              ctaLink="#"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 xl:pb-0">
        <div className="container md:w-[95%]">
          <div className="grid grid-cols-12 gap-6 text-center md:gap-[5%] md:text-left">
            <div className="col-span-12 hidden xl:col-span-6 xl:block">
              <Image
                src="/images/who-we-are-image.png"
                alt="Who we are"
                width={893}
                height={1226}
              />
            </div>
            <div className="col-span-12 space-y-6 xl:col-span-6">
              <HeadingBlock subheading="Our Process" heading="How We Work" />
              <div className="grid grid-cols-12 space-x-0 space-y-8 md:space-x-6 md:space-y-0 xl:space-x-0 xl:space-y-8">
                <div className="col-span-12 md:col-span-4 xl:col-span-12">
                  <ItemList
                    bullet="1"
                    heading="Consultation"
                    description="We start by listening to your needs and understanding your business. Whether you're looking for a redesign or a new website, we’ll tailor the solution to you."
                  />
                </div>
                <div className="col-span-12 md:col-span-4 xl:col-span-12">
                  <ItemList
                    bullet="2"
                    heading="Design & Develop"
                    description="Our team creates a unique, modern design based on your vision and goals. We ensure your website is responsive and optimized for SEO."
                    bulletNoBackground={true}
                  />
                </div>
                <div className="col-span-12 md:col-span-4 xl:col-span-12">
                  <ItemList
                    bullet="3"
                    heading="Launch & Review"
                    description="We launch your new website and provide ongoing support. All we ask is a Trustpilot review once your website goes live."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16">
        <div className="container md:w-[95%]">
          <div className="grid grid-cols-12 gap-x-0 gap-y-12 text-center md:gap-x-10 md:text-left lg:gap-x-[3.5%] xl:gap-y-6">
            <div className="col-span-12 mx-auto max-w-[560px] xl:col-span-5 xl:max-w-full">
              <HeadingBlock
                subheading="our features"
                heading="What You’ll Get with Our Web Design Offer"
              />
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-12 xl:col-span-7">
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="Custom Design"
                  description="We’ll build a website that’s unique to your business and brand."
                  useIcon={true}
                  iconSrc="/images/code-icon.svg"
                  iconWidth={42}
                  iconHeight={38}
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="Responsive Layout"
                  description="Your site will look great on any device, from mobile to desktop."
                  useIcon={true}
                  iconSrc="/images/responsive-icon.svg"
                  iconWidth={38}
                  iconHeight={38}
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="SEO-Friendly Structure"
                  description="We’ll build a website that’s unique to your business and brand."
                  useIcon={true}
                  iconSrc="/images/globe-icon.svg"
                  iconWidth={42}
                  iconHeight={42}
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="Fast & Secure"
                  description="Your site will look great on any device, from mobile to desktop."
                  useIcon={true}
                  iconSrc="/images/rocket-icon.svg"
                  iconWidth={41}
                  iconHeight={41}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container md:w-[95%]">
          <div className="mb-16 space-y-12">
            <div className="mx-auto max-w-[700px]">
              <HeadingBlock
                subheading="SEO Services"
                heading="Boost Your Website’s Visibility with Expert SEO Services"
                className="xl:text-center"
              >
                <div className="text-center">
                  <p>
                    Our SEO experts use a strategic approach to help your business rank higher in
                    search results and attract more traffic. With a focus on long-term success, we
                    offer a range of SEO services, including:
                  </p>
                </div>
              </HeadingBlock>
            </div>
            <div className="grid grid-cols-12 gap-x-2 gap-y-8">
              <div className="col-span-6 lg:col-span-3">
                <IconBox
                  iconSrc="/images/target-icon.svg"
                  iconWidth={42}
                  iconHeight={42}
                  heading="On-Page Optimization"
                />
              </div>
              <div className="col-span-6 lg:col-span-3">
                <IconBox
                  iconSrc="/images/magnifying-glass-icon.svg"
                  iconWidth={42}
                  iconHeight={42}
                  heading="Keyword Research"
                />
              </div>
              <div className="col-span-6 lg:col-span-3">
                <IconBox
                  iconSrc="/images/gear-icon.svg"
                  iconWidth={37}
                  iconHeight={42}
                  heading="Backlink Strategies"
                />
              </div>
              <div className="col-span-6 lg:col-span-3">
                <IconBox
                  iconSrc="/images/tool-icon.svg"
                  iconWidth={42}
                  iconHeight={40}
                  heading="Technical"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[700px]">
            <div className="heading-5 text-center text-secondary">
              <p>
                Let us help you drive more traffic to your website, improve search rankings, and
                grow your business online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
