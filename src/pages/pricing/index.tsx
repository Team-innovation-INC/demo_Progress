import { Header, Introduction, Pricing } from '@/components/payment '

export default function index() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Header/>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <Introduction/>
          <Pricing/>
        </div>
      </div>
    </div>
  )
}
