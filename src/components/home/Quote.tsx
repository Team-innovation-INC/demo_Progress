import { useCallback } from "react"
import { Quote1, Quote2, QuoteInfo } from "./info"

 /*
/  / ----- Component Quote is based created to indicate the needs of this project
 */

export default function Quotes() {

  const Quote = useCallback(({_symbol}: {_symbol: symbol}) => {
    const firstName = QuoteInfo.get(_symbol)?.firstName
    const lastName = QuoteInfo.get(_symbol)?.lastName
    const quote = QuoteInfo.get(_symbol)?.quote
    const picture = QuoteInfo.get(_symbol)?.picture
    return (
      <figure className="mt-10">
      <blockquote className="text-center text-xl font-semibold leading-8 text-indigo-600 sm:text-2xl sm:leading-9">
        <p>
          {quote}
        </p>
      </blockquote>
      <figcaption className="mt-10">
        <img
          className="mx-auto h-20 w-20 rounded-full"
          src={picture}
          alt=""
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-indigo-600">{firstName} </div>
          <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-indigo-600">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="text-indigo-600">{lastName}</div>
        </div>
      </figcaption>
    </figure>
    )
  },[])

  return (
    <section className="relative overflow-hidde py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
        <Quote _symbol={Quote1}/>
        <Quote _symbol={Quote2}/>
      </div>
    </section>
  )
}
