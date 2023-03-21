// ---- compoent imports
import { NavigationListMobile, NavigationListLarge, Logo, FooterLarge, FooterMobile, MenuButton } from '.'
// ---- icons imports 
import { Disclosure } from '@headlessui/react'

export default function NavBar(props: {children: JSX.Element}) {
  const {children} = props

  return (
    <div>
      <Disclosure as="nav" className="bg-purple-900" style={{position: "fixed", zIndex: 100, width: "-webkit-fill-available"}}>
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-7xl px-4  lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Logo/>
                <NavigationListLarge/>
              </div>
              <div className="hidden md:block">
                <FooterLarge/>
              </div>
              <div className="-mr-2 flex md:hidden">
                <MenuButton open={open}/>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <NavigationListMobile/>
            <FooterMobile/>
          </Disclosure.Panel>
        </div>
      )}
      </Disclosure>
      <div>
        {children}
      </div>
    </div>
  )
};