import Link from "next/link"
import { FaUserCircle } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'

const Header = () => {
    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between rounded-full bg-green-400    ">
            <div className='flex items-center w-full md:2/3'>
                <Link href="/" className='font-black text-orange-200'    >
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
                <ul className="flex ml-auto  justify-between w-full md:w-1/3 ">
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