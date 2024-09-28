import React from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import HoverCard from '@/components/ui/HoverCard'
import ItemList from '@/components/ui/ItemList'
import HeadingBlock from '@/components/ui/HeadingBlock'
import IconBox from '@/components/ui/IconBox'
import { Card, CardContent } from '@/components/ui/Card'
import TestimonialAuthor from '@/components/ui/TestimonialAuthor'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel'

export default function Home() {
  return (
    <React.Fragment>
      <section className="flex h-auto min-h-0 w-full items-center justify-center bg-[url('/_next/image?url=%2Fimages%2Fsection-background-1.jpg&w=1920&q=75')] bg-cover bg-center bg-no-repeat py-16 md:min-h-[530px] xl:h-[calc(100vh-94px)] xl:min-h-[700px] xl:py-0">
        <div className="container">
          <div className="mx-auto max-w-[720px] xl:max-w-[960px]">
            <div className="heading-1 mb-7 text-center text-white">
              <h1>Transform Your Online Presence with a Stunning, Modern Website</h1>
            </div>
            <div className="mx-auto mb-8 max-w-[800px] text-center text-white">
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
                  useImage={true}
                  imageSrc="/images/code-icon.svg"
                  imageWidth={42}
                  imageHeight={38}
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="Responsive Layout"
                  description="Your site will look great on any device, from mobile to desktop."
                  useImage={true}
                  imageSrc="/images/responsive-icon.svg"
                  imageWidth={38}
                  imageHeight={38}
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="SEO-Friendly Structure"
                  description="We’ll build a website that’s unique to your business and brand."
                  useImage={true}
                  imageSrc="/images/globe-icon.svg"
                  imageWidth={42}
                  imageHeight={42}
                />
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-6">
                <ItemList
                  heading="Fast & Secure"
                  description="Your site will look great on any device, from mobile to desktop."
                  useImage={true}
                  imageSrc="/images/rocket-icon.svg"
                  imageWidth={41}
                  imageHeight={41}
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

      <section className="bg-[#939598] bg-[url('/_next/image?url=%2Fimages%2Fsection-background-2.jpg&w=1920&q=75')] bg-cover bg-center bg-no-repeat py-16">
        <div className="container md:w-[95%]">
          <div className="space-y-10">
            <div className="mx-auto max-w-[700px]">
              <HeadingBlock
                subheading="what we offer"
                heading="Our New Web Design Offer"
                className="xl:text-center"
                subheadingColor="white"
                headingColor="white"
              >
                <div className="text-center text-white">
                  <p>
                    Looking for a modern, responsive website? We are offering a limited number of{' '}
                    <strong>free web designs</strong> for businesses looking to transform their
                    online presence. In exchange for a Trustpilot review, we’ll design and develop a
                    fully customized website that helps you achieve your business goals.
                  </p>
                </div>
              </HeadingBlock>
            </div>
            <div className="text-center">
              <Button asChild className="max-[360px]:text-[14px]">
                <Link href="#">Claim Your Free Website Design</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12 bg-white py-16">
        <div className="container md:w-[95%]">
          <div className="mx-auto max-w-[700px]">
            <HeadingBlock
              subheading="testimonials"
              heading="What Our Clients Say"
              className="xl:text-center"
            >
              <div className="text-center">
                <p>
                  We’re committed to delivering outstanding results for our clients. Here’s what
                  they have to say about their experience with Mason Boost.”
                </p>
              </div>
            </HeadingBlock>
          </div>
        </div>
        <div className="container mx-auto xl:max-w-[1300px]">
          <Carousel className="-my-6">
            <CarouselContent className="md:p-6">
              <CarouselItem className="md:basis-1/2 xl:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between space-y-6">
                    <div className="body-text pt-6">
                      <p>
                        Mason Boost took our digital marketing to the next level. Their expertise in
                        SEO optimization significantly increased our website traffic and engagement.
                        We saw measurable improvements in our search rankings and social media
                        presence within weeks. Highly recommended!
                      </p>
                    </div>
                    <TestimonialAuthor
                      profilePic="/images/karen-D-profile-pic.png"
                      name="karen D."
                      position="Marketing manager"
                      className="pb-6"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 xl:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between space-y-6">
                    <div className="body-text pt-6">
                      <p>
                        The team at Mason Boost is exceptional. Their tailored approach to search
                        engine optimization delivered fantastic results for our brand. We’re now
                        enjoying a stronger online presence and higher conversion rates thanks to
                        their strategic insights and professional execution.
                      </p>
                    </div>
                    <TestimonialAuthor
                      profilePic="/images/Sarah-L-profile-pic.png"
                      name="Sarah L."
                      position="business owner"
                      className="pb-6"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 xl:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between space-y-6">
                    <div className="body-text pt-6">
                      <p>
                        Working with Mason Boost has been a game-changer for our digital marketing
                        efforts. Their deep knowledge of SEO strategies helped us achieve remarkable
                        growth and visibility. Their support and innovative solutions have made a
                        real difference for our business.
                      </p>
                    </div>
                    <TestimonialAuthor
                      profilePic="/images/michael-t-profile-pic.png"
                      name="michael t."
                      position="ceo"
                      className="pb-6"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F7F8FC] py-16">
        <div className="container md:w-[95%]">
          <div className="space-y-16">
            <HeadingBlock subheading="our portfolio" heading="Our Recent Works" />
            <Carousel>
              <CarouselContent className="-mt-6 mb-5" overflowVisible={true}>
                <CarouselItem className="pl-6 md:basis-1/2 xl:basis-[40%]">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/sample-work-1-image.png"
                      alt="Sample Work 1"
                      width={430}
                      height={420}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-[#000000AB]"></div>
                    <div className="heading-4 absolute bottom-14 left-16 z-20 text-white">
                      <h3>Sample 1</h3>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-6 md:basis-1/2 xl:basis-[40%]">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/sample-work-2-image.png"
                      alt="Sample Work 2"
                      width={430}
                      height={420}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-[#000000AB]"></div>
                    <div className="heading-4 absolute bottom-14 left-16 z-20 text-white">
                      <h3>Sample 2</h3>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-6 md:basis-1/2 xl:basis-[40%]">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/sample-work-3-image.png"
                      alt="Sample Work 3"
                      width={430}
                      height={420}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-[#000000AB]"></div>
                    <div className="heading-4 absolute bottom-14 left-16 z-20 text-white">
                      <h3>Sample 3</h3>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center md:justify-start">
                <CarouselPrevious className="relative left-0 top-8 mr-6 h-[45px] w-[45px] border-primary bg-transparent text-primary hover:bg-primary hover:text-white 2xl:h-[60px] 2xl:w-[60px]" />
                <CarouselNext className="relative left-0 top-8 h-[45px] w-[45px] border-primary bg-transparent text-primary hover:bg-primary hover:text-white 2xl:h-[60px] 2xl:w-[60px]" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
