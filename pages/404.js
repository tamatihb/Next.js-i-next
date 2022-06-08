import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function ForOHFor() {
  return <>
  <Navbar/>
  <div className="w-full pt-20 flex flex-col justify-center items-center mt-24 bg-gray-100 rounded-tl-extraLarge font-semibold italic  ">
        <h1 className="text-black text-6xl font-bold text-center">
          <span className="text-cyan-300">404</span> - Page Not Found <br />
        </h1>
        <br />
        <p className="text-xl text-gray-400">
<span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">Sorry  </span>
              </span>{" "}for the inconvience.        </p>
        <div className="mb-24">
        </div>
        <Link href="/">
      <a className="pb-3">
        Go back home
      </a>
    </Link>
      </div>
<div className="mt-60">    
  <Footer/>
</div>
  </>
}