import { Menu } from '@headlessui/react'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

const user = {
  name : 'Raed Rdhaounia'         ,
  email: 'raedrdhaounia@gmail.com',
  phone: '+21651164297'
}

export function FooterLarge() {
  return (
    <div className="ml-4 flex items-center md:ml-6">
      <button
        type="button"
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View Code</span>
        <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
          </Menu.Button>
        </div>
      </Menu>
    </div>
  )
}

export function FooterMobile() {
    return(
        <div className="border-t border-gray-700 pt-4 pb-3">
        <div className="flex items-center px-5">
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">
              {user.name}
            </div>
            <div className="text-sm font-medium leading-none text-gray-400">
              {user.email}
            </div>
            <div className="text-sm mt-2 font-medium leading-none text-gray-400">
              {user.phone}
            </div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="sr-only">View Code</span>
            <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
        </div>
      </div>
    )
}