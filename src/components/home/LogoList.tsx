import { useCallback } from "react"
import { logoInfo, React, Bootstrap, Redux, Vuexy } from "./info"

/*
/  / ----- Component LogoList is based created to declare the technologies list used to build this the project
 */

export default function LogoList() {

  const Logo = useCallback(({_symbol}: {_symbol: symbol}) => {
    const alt = logoInfo.get(_symbol)?.alt
    const src = logoInfo.get(_symbol)?.src
    return (
      <img
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        alt={alt}
        width={158}
        height={48}
        src={src}
      />
    )
  },[])

  return (
    <div className="py-24 sm:py-10">
      <div className="mx-authttps://www.drupal.org/files/project-images/bootstrap-stack.pngo max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold leading-4 text-white underline">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <Logo _symbol={React} />
          <Logo _symbol={Bootstrap} />
          <Logo _symbol={Vuexy} />
          <Logo _symbol={Redux} />
        </div>
      </div>
    </div>
  )
}
  