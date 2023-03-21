export default function Logo() {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8"
          src="/assets/images/demo-progress.png"
          alt="Your Company"
        />
      </div>
      <div className="block md:hidden justify-center">
        <div className="ml-10 flex items-baseline text-center text-white space-x-4">
          Progress App
        </div>
      </div>
    </>
  )
}