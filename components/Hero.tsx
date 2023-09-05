import Link from '@/components/Link'

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden py-24">
        <div className="relative z-20 flex items-center">
          <div className="container relative flex flex-col justify-between py-4">
            <div className="flex flex-col">
              {/* <img src="/images/person/11.webp" className="mx-auto rounded-full w-28" /> */}

              <h2 className="max-w-3xl py-2 text-3xl font-bold text-left text-gray-800 md:text-5xl dark:text-white">
                Hi, I&#x27;m Avash 👋
              </h2>
              <p className="my-6 text-xl text-left md:text-3xl dark:text-white">
                I craft solutions for the web and I write.
              </p>
              <div className="mt-8 mb-12">
                <Link
                  href={`/about`}
                  className="px-4 py-2 my-2 text-gray-800 bg-transparent border-2 border-gray-800 dark:border-gray-300 md:mt-16 hover:dark:bg-white hover:dark:text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
