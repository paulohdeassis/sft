"use client"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  { name: 'Facebook Ads', href: '#',},
  { name: 'Google Ads', href: '#',},
  { name: 'Google My Business',href: '#',},
  { name: 'Youtube Ads',href: '#',},
  { name: 'Lead Generation',href: '#',},
  { name: 'Landing Pages',href: '#',},
  { name: 'Funnels', href: '#',},
]

const niches = [
  { name: 'Car Dealerships', href: '#'},
  { name: 'Real Estate Agents', href: '#'},
  { name: 'Plastic Surgeons',href: '#'},
  { name: 'Dentists',href: '#'},
  { name: 'Beauty Specialists',href: '#'},
  { name: 'Insurance Brokers',href: '#'},
  { name: 'Ecommerce Owners', href: '#'},
  { name: 'Others', href: '#'},
]

function classNames(...classes:String[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isServiceShowing, setIsServiceShowing] = useState(false)
  const [isNicheShowing, setIsNicheShowing] = useState(false)

  return (
    <header className="bg-main-purple">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p2 lg:px-12" aria-label="Global">
        <div className="flex  lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
          <Image src='/mg-media.svg' className='w-auto h-10 sm:h-8' alt='mg media logo' height={100} width={100} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold  hover:text-light-purple leading-6 text-white"
            onMouseEnter={() => setIsServiceShowing(true)}
            onMouseLeave={() => setIsServiceShowing(false)}
            >
                OUR SERVICES 
              <ChevronDownIcon className="h-5 w-5 font-bold flex-none  text-white" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              show={isServiceShowing}
            >
              <Popover.Panel className="absolute -left-12 top-full z-10 mt-3 w-max max-w-md overflow-hidden hover:text-light-purple bg-main-purple shadow-lg ring-1 ring-gray-900/5"
             onMouseEnter={() => setIsServiceShowing(true)}
              onMouseLeave={() => setIsServiceShowing(false)}    
              >
                <div className=" bg-main-purple">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center w-full p-4 text-white text-sm leading-6  hover:bg-light-purple"
                    >
                    
                      <div className="flex-auto">
                        <a href={item.href} className="block w-full text-lg font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 hover:text-light-purple text-white"
            onMouseEnter={() => setIsNicheShowing(true)}
            onMouseLeave={() => setIsNicheShowing(false)}
            >
               OUR NICHES
              <ChevronDownIcon className="h-5 w-5 font-bold flex-none text-white hover:text-light-purple" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              show={isNicheShowing}
            >
              <Popover.Panel className="absolute -left-12 top-full z-10 mt-3 w-max max-w-md overflow-hidden bg-main-purple shadow-lg ring-1 ring-gray-900/5"
              onMouseEnter={() => setIsNicheShowing(true)}
              onMouseLeave={() => setIsNicheShowing(false)}
              
              >
                <div className=" bg-main-purple">
                  {niches.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center w-full p-4 text-white text-sm leading-6 hover:bg-light-purple"
                    >
                    
                      <div className="flex-auto">
                        <a href={item.href} className="block w-full text-lg font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>
         

          <Link href='#' className="text-lg font-semibold leading-6 hover:text-light-purple text-white">OUR TEAM</Link>
          <Link href='#' className="text-lg font-semibold leading-6 hover:text-light-purple text-white">CONTACT US</Link>
            
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 le-0 z-10 w-full overflow-y-auto  bg-main-purple px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <Image src='/mg-media.svg' className='w-auto h-10 sm:h-8' alt='mg media logo' height={100} width={100} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-light-purple">
                        SERVICES
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...services,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-light-purple"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-5 text-white hover:bg-light-purple">
                        NICHES
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...niches].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-5 text-white hover:bg-light-purple"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-light-purple"
                >
                OUR TEAM
                </Link>
                <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-light-purple"
                >
                CONTACT US
                </Link>

              
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
