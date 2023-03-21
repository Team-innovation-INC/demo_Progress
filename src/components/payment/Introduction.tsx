import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Full access to your space'                                      ,
  'maintain and every package we offer for 2 yours for free'       ,
  'unlimit messages emails send, edit and remove just form 2 years',
  'official target in our demo site as first confience client get '
]

export default function Introduction() {
  return (
    <div className="p-8 sm:p-10 lg:flex-auto">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
        What you will get as a new Client
      </h3>
      <p className="mt-6 text-base leading-7 text-gray-600">
        you can enjoy our site for now an you will get the following features as full access in your espace as we are promise you to get
      </p>
      <div className="mt-10 flex items-center gap-x-4">
        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
          What’s included
        </h4>
        <div className="h-px flex-auto bg-gray-100" />
      </div>
      <ul
        role="list"
        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
      >
        {includedFeatures.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}