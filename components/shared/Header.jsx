/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';


/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/outline'
import { useConfig } from '../../hooks/useConfig';

const menu = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/about',
    icon: CursorClickIcon,
  },
  { name: 'Notion Templates', description: "Your customers' data will be safe and secure.",
    href: '/notion/templates',
    icon: ShieldCheckIcon
  },
  {
    name: 'Blog',
    description: "Connect with third-party tools that you're already using.",
    href: '/blog',
    icon: ViewGridIcon,
  }
]

const mobileMenu = [
  ...menu,
  { name: 'Resources', description: "Your customers' data will be safe and secure.",
    href: '/resources',
    icon: ShieldCheckIcon
  },
  {
    name: 'Contact',
    description: "Connect with third-party tools that you're already using.",
    href: '/contact',
    icon: ViewGridIcon,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const { toggleDarkMode, darkMode } = useConfig();

  return (
    <Popover className={`relative mx-auto max-w-7xl dark:bg-slate-900 bg-white dark:border-b dark:border-slate-800`}>
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Codersei</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src={`/images/codersei-logo-${darkMode ? 'light' : 'dark'}.svg`}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">

            {
              menu.map((item, index) => 
                <Link href={item.href} key={item.name}>
                  <a className={`text-base font-medium  dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-100 text-gray-800 hover:text-gray-600 focus:text-gray-900`}>
                    {item.name}
                  </a>
                </Link>
              )
            }

          </Popover.Group>
          
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <Link href="/">
              <a className={`text-base font-medium dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-100 text-gray-800 hover:text-gray-600 focus:text-gray-900`}>
                Resources
              </a>
            </Link>
            <Link href="/">
              <a
                className="inline-flex items-center justify-center px-4 py-2 ml-4 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-500 whitespace-nowrap hover:bg-cyan-600"
              >
                Contact
              </a>
            </Link>
            <button onClick={toggleDarkMode} className="inline-flex items-center justify-center px-4 py-2 ml-4 text-base font-medium text-gray-500 border border-transparent rounded-md shadow-sm hover:text-gray-700 whitespace-nowrap ">
              {
                darkMode ?  <MoonIcon className="w-6 h-6 text-cyan-400" /> :   <SunIcon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className={` divide-y-2 rounded-lg shadow-lg ring-1 ring-opacity-5 dark:divide-gray-50 dark:ring-black dark:bg-slate-900 divide-gray-50 ring-black bg-white`}>
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mobileMenu.map((item) => (
                     <Link href={item.href}  key={item.name}>
                      <a
                        className="flex items-center p-3 -m-3 rounded-md"
                      >
                        <item.icon className="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                        <span className={`ml-3 text-base font-medium dark:text-gray-100 text-gray-900`}>{item.name}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
