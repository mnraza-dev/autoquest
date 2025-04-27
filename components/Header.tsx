import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft, CarFrontIcon, Heart, Layout } from 'lucide-react'

const Header = ({ isAdminpage = false }) => {
    const isAdmin = false
    return (
        <header className='px-8 py-4 bg-white/35 backdrop-blur-md z-50 border-b fixed top-0 left-0  max-w-full w-full '>

            <nav className=' flex justify-between'>
                <Link href={isAdminpage ? "/admin" : "/"} className='text-2xl  font-medium'>
                    <span className='mr-1 font-medium text-red-400'>  Auto</span>Quest

                    {isAdminpage && (
                        <span className='font-light text-red-600 text-xs absolute top-2 left-42'>admin</span>
                    )}
                </Link>
                <div className='flex gap-4'>
                    {isAdminpage ? (
                        <Link href={"/"}>
                            <Button size={"lg"} variant={'outline'}>
                                <ArrowLeft size={20} />
                                <span className='hidden md:inline'>Back to App</span></Button>
                        </Link>
                    ) : <SignedIn>
                        <Link href={"/saved-cars"}>
                            <Button size={"lg"} variant={'default'}>
                                <Heart size={20} />
                                <span className='hidden md:inline'>Saved Cars</span></Button>
                        </Link>
                        {!isAdmin ? (
                            <Link href={"/reservations"}>
                                <Button size={"lg"} variant={'default'}>
                                    <CarFrontIcon size={20} />
                                    <span className='hidden md:inline'>
                                        My Reservations
                                    </span>
                                </Button>
                            </Link>
                        ) :
                            (
                                <Link href={"/admin"}>
                                    <Button size={"lg"} variant={'outline'}>
                                        <Layout size={20} />
                                        <span className='hidden md:inline'>Admin Portal</span></Button>
                                </Link>
                            )}


                    </SignedIn>}

                    <SignedOut>
                        <SignInButton forceRedirectUrl={"/"}>
                            <Button size={"lg"} variant={'default'}>Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
                    </SignedIn>
                </div>

            </nav>

        </header>
    )
}

export default Header