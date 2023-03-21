// ---- nextjs navigation imports
import { NextRouter, useRouter } from "next/router"
// ---- import icons 
import { Disclosure } from "@headlessui/react"
// ---- util functions imports
import { classNames } from "@/components/view/utilities/functions "

const navigation = [
    { id: '/'             , name: 'DASHBOARD'    , href: '/'            , current:(_id: string, _router: NextRouter) => _id === _router.asPath  },
    { id: '/documentation', name: 'DOCUMENTATION', href: 'documentation', current:(_id: string, _router: NextRouter) => _id === _router.asPath  },
    { id: '/pricing'      , name: 'PRINCING'     , href: 'pricing'      , current:(_id: string, _router: NextRouter) => _id === _router.asPath  },
    { id: '/contact'      , name: 'CONTACT US'   , href: 'contact'      , current:(_id: string, _router: NextRouter) => _id === _router.asPath  },
]

export function NavigationListLarge() {
  const router = useRouter()
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => { 
          return (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current(item.id, router) ?
                  'bg-gray-900 text-white'
                :
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={
                item.current(item.id, router) ?
                  'page'
                :
                  undefined
              }
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function NavigationListMobile() {
  const router = useRouter()
  return (
    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current(item.id, router) ? 
              'bg-gray-900 text-white'
            :
             'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          )}
          aria-current={
            item.current(item.id, router) ? 
              'page' 
            :
              undefined
          }
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  )
}