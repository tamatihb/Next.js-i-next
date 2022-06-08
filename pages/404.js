import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function ForOHFor() {
  return <>
  <Navbar/>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}