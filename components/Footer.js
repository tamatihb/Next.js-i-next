import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div>
            <footer className="p-4 h-26 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 h10 bg-gray-100">
    <span className="text-sm text-black">© 2022 <a href="https://flowbite.com" className="hover:underline">TamatiHarvey</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-black sm:mt-0">

        <li>
        <Link href="/About">
            <a className="mr-4 hover:underline md:mr-6 ">About</a>
        </Link>
        </li>

        <li>
        <Link href="/PrivacyPolicy">
            <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </Link>
        </li>

        <li>
        <Link href="/Contact">
            <a className="hover:underline">Contact</a>
        </Link>
        </li>
    </ul>
</footer>
        </div>
    )
}

export default Footer
