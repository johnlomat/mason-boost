import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewsLetterForm from './forms/NewsLetter'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-primary py-16">
        <div className="container space-y-16 md:w-[95%] xl:max-w-[1400px]">
          <div className="grid grid-cols-12 justify-between gap-x-0 md:gap-x-14 lg:gap-x-16 xl:flex">
            <div className="col-span-12 mb-10 md:col-span-6 md:mb-0 xl:max-w-[360px] 2xl:max-w-[460px]">
              <Image
                src="/images/Mason-Boost-logo-white.svg"
                alt="Mason Boost Logo"
                width={204}
                height={51}
                className="mx-auto mb-6 md:ms-0"
              />
              <div className="mb-6 text-center text-white md:mb-16 md:text-left">
                <p>
                  We build stunning websites designed to grow your business. Contact us today to
                  learn more about our web design services.
                </p>
              </div>
              <div className="flex justify-center space-x-8 md:justify-start">
                <Link href="https://www.facebook.com/profile.php?id=61561506080680" target="_blank">
                  <Image src="/images/fb-icon-white.svg" alt="Facebook" width={25} height={25} />
                </Link>
                <Link href="https://www.linkedin.com/company/mason-boost-ltd" target="_blank">
                  <Image
                    src="/images/linkedin-icon-white.svg"
                    alt="LinkedIn"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://www.instagram.com/masonboost/" target="_blank">
                  <Image
                    src="/images/instagram-icon-white.svg"
                    alt="Instagram"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-12 flex flex-col space-x-0 space-y-10 md:col-span-6 xl:flex-row xl:space-x-20 xl:space-y-0">
              <div className="flex flex-col space-x-0 space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0">
                <div className="max-w-full text-center md:max-w-[85px] md:text-left">
                  <div className="mb-6 text-[13px] font-semibold uppercase text-white">Sitemap</div>
                  <div className="flex flex-col space-y-4">
                    <Link href="#" className="text-[15px] text-white hover:underline">
                      Menu
                    </Link>
                    <Link href="#" className="text-[15px] text-white hover:underline">
                      About Us
                    </Link>
                    <Link href="#" className="text-[15px] text-white hover:underline">
                      Services
                    </Link>
                    <Link href="#" className="text-[15px] text-white hover:underline">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="max-w-full text-center md:max-w-[210px] md:text-left">
                  <div className="mb-6 text-[13px] font-semibold uppercase text-white">
                    Contact info
                  </div>
                  <div className="flex flex-col items-center space-y-4 md:items-start">
                    <div className="flex gap-4">
                      <Image
                        src="/images/phone-icon-white.svg"
                        alt="Phone"
                        width={19}
                        height={19}
                      />
                      <Link
                        href="tel:8444891115"
                        className="text-[15px] text-white hover:underline"
                      >
                        (844) 489-1115
                      </Link>
                    </div>
                    <div className="flex gap-4">
                      <Image src="/images/mail-icon-white.svg" alt="Phone" width={19} height={19} />
                      <Link
                        href="mailto:info@masonboost.com"
                        className="text-[15px] text-white hover:underline"
                      >
                        info@masonboost.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[360px]">
                <div className="heading-4 ld:space-y-12 space-y-6 text-white">
                  <div className="text-center md:text-left">
                    <h2>Subscribe to get latest updates</h2>
                  </div>
                  <NewsLetterForm />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-[13px] text-white">
            Copyright © 2024 Mason Boost. All Right Reserved.
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
