import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = ({ isAdminpage = false }) => {
    const isAdmin = false
    return (
        <header className='px-8 py-4 bg-gray-800 fixed top-0 left-0  max-w-full w-full z-10'>

            <nav className='text-white flex justify-between'>
                <Link href={isAdminpage ? "/admin" : "/"} className='text-2xl text-white font-medium'>
                    <span className='mr-2 font-light text-red-400'>  Auto</span>Quest
                </Link>
                <div className='flex gap-4'>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Cars</Link>
                    <Link href={"/"}>Dealers</Link>
                    <Link href={"/signin"}>Login</Link>
                </div>

            </nav>

        </header>
    )
}

export default Header