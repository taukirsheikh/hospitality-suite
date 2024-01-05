import Link from "next/link"
import { FaUserCircle } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'

const Header = () => {
    return (
        <header className="py-10 px-4 container mx-auto text-xl flex  md:flex-nowrap items-center justify-between">
            <div className='flex items-center w-full flex-wrap  md:2/3'>
                <Link href="/" className='font-black text-tertiary-dark'    >
                    Hotal
                </Link>
                <ul className="flex items-center ml-5">
                    <li>
                        <Link href='/auth'>
                            <FaUserCircle className='cursor-pointer' />
                        </Link>

                    </li>
                    <li className="ml-2 ">
                        <MdDarkMode className='cursor-pointer' />
                    </li>

                </ul>
                <ul className="flex justify-between ml-auto w-full md:w-1/3 ">
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/rooms">Rooms</Link>
                    </li>
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/">Contact</Link>
                    </li>

                </ul>

            </div>
        </header>
    )
}

export default Header