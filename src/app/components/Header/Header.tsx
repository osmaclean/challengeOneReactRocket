import Image from 'next/image'

export const Header = () => {
  return (
    <>
      <header className="bg-gray-700 flex items-center justify-center h-48">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/rocket.svg"
            alt="Rocket Logo"
            aria-label="Rocket Logo"
            width={24}
            className='w-12 h-12'
            height={24}
          />
          <h2 className="text-blue-200 flex items-center justify-center font-bold text-5xl">
            to<p className="text-purple-200">do</p>
          </h2>
        </div>
      </header>
    </>
  )
}
